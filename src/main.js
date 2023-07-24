import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
//import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
const firebaseConfig = {
  apiKey: "123",
  authDomain: "123",
  projectId: "123",
  storageBucket: "123",
  messagingSenderId: "123",
  appId: "123",
  measurementId: "123",
};
firebase.initializeApp(firebaseConfig);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
