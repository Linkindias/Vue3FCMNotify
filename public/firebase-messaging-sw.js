//import { initializeApp } from "firebase/compat/app";
//import { getMessaging } from "firebase/messaging/sw";

importScripts(
  "https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js"
);

self.firebase.initializeApp({
  apiKey: "123",
  authDomain: "123",
  projectId: "123",
  storageBucket: "123",
  messagingSenderId: "123",
  appId: "123",
  measurementId: "123",
  databaseURL: "https://white-web-cac.firebaseio.com",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = self.firebase.messaging();

messaging.onMessage((payload) => {
  console.log("sw Message received. ", payload);
});

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = { body: payload.notification.body };
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
