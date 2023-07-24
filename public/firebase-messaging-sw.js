//import { initializeApp } from "firebase/compat/app";
//import { getMessaging } from "firebase/messaging/sw";

importScripts(
  "https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js"
);

self.firebase.initializeApp({
  apiKey: "AIzaSyBsCS2OyCyp08wNtX0yz8qAf6MZ0z8rvmM",
  authDomain: "testbrowser-fa902.firebaseapp.com",
  projectId: "testbrowser-fa902",
  storageBucket: "testbrowser-fa902.appspot.com",
  messagingSenderId: "95053086381",
  appId: "1:95053086381:web:76ab2d499eb65da5cb1024",
  measurementId: "G-Q6RD4Q4Q80",
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
