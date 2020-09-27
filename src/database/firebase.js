import *as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyATZgKsFiNyzrCobVdzlK3Cmc8XTKmygSw",
    authDomain: "learnifi-ecbfc.firebaseapp.com",
    databaseURL: "https://learnifi-ecbfc.firebaseio.com",
    projectId: "learnifi-ecbfc",
    storageBucket: "learnifi-ecbfc.appspot.com",
    messagingSenderId: "1058124779816",
    appId: "1:1058124779816:web:22f7a60ddcf659648c801d",
    measurementId: "G-0SRECHWNK0"
  };

  firebase.initializeApp(firebaseConfig);
  
  export default firebase;
