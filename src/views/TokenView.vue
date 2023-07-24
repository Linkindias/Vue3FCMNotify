<template>
    <div class="about">
      <h1>This is an about page</h1>
      <h4>T: {{ token }}</h4>
      <button @click="getToken()"> get Token</button>
    </div>
  </template>
  <script setup>
    import { ref } from 'vue'
    import firebase from "firebase/compat/app";
    import "firebase/compat/messaging";
  
    let token = ref('');
  
    console.log(firebase);
    
  const getToken = () => {
    const messaging = firebase.messaging();
    messaging.getToken({vapidKey:"BNVGB-o-5hwrLRL83UECXUMgVQ3R4xKZA2IZoJ59Hsy5dgiVZXU02UTF-QkI_mZ5P5fKM2dmMp8cMdmjg5QaOf4"})
      .then((currentToken) => {
        if (currentToken) {
          token.value = currentToken;
          console.log(currentToken);
        } 
        else {
          console.log("No registration token available. Request permission     to generate one.");}
        })
      .catch((err) => {
          console.log("An error occurred while retrieving token. ", err);
     });
  };
  
  const receiveMessage = () => {
    const messaging = firebase.messaging();
      messaging.onMessage((payload) => {
      console.log('message received.', payload);
  
      let notification = payload.notification;
      console.log("Notification: ", notification);
    });
  }
     receiveMessage();
     console.log('receiveMessage');
    
    </script>
  <style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>