import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import zh from "./languages/zh.json";
import en from "./languages/en.json";

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
const language = localStorage.getItem('locale') == undefined ? 'zh-TW' : localStorage.getItem('locale')
console.log(language)
const i18n = createI18n({
  legacy: false,
  locale: 'zh-TW',
  fallbackLocale: 'zh-TW',
  globalInjection: true,
  messages: {
    'zh-TW': zh,
    'en-US': en
  }
})

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(i18n)
app.mount("#app");
