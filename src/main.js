import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
//import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
const firebaseConfig = {
  apiKey: "AIzaSyBsCS2OyCyp08wNtX0yz8qAf6MZ0z8rvmM",
  authDomain: "testbrowser-fa902.firebaseapp.com",
  projectId: "testbrowser-fa902",
  storageBucket: "testbrowser-fa902.appspot.com",
  messagingSenderId: "95053086381",
  appId: "1:95053086381:web:76ab2d499eb65da5cb1024",
  measurementId: "G-Q6RD4Q4Q80",
};
firebase.initializeApp(firebaseConfig);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
