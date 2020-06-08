import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyAcfpZGz08Q_uo9g4linLpHWcPzyuymNUM",
  authDomain: "prod-covidapp.firebaseapp.com",
  databaseURL: "https://prod-covidapp.firebaseio.com",
  projectId: "prod-covidapp",
  storageBucket: "prod-covidapp.appspot.com",
  messagingSenderId: "643953786364",
  appId: "1:643953786364:web:94348a6c1f260d20938679"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
