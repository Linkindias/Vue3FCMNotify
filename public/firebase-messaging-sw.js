import { initializeApp } from "firebase/compat/app";
import { getMessaging } from "firebase/messaging/sw";

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const firebaseApp = initializeApp({
  apiKey: "123",
  authDomain: "123",
  databaseURL: "123",
  projectId: "123",
  storageBucket: "123",
  messagingSenderId: "123",
  appId: "123",
  measurementId: "123",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = getMessaging(firebaseApp);
