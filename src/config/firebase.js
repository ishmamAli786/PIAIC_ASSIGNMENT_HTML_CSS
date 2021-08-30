import firebase from 'firebase';




const firebaseConfig = {
    apiKey: "AIzaSyDkrvmtrzE3QNzc5jGgkRKDpK4YGWt1oZQ",
    authDomain: "authenticate-3f621.firebaseapp.com",
    databaseURL: "https://authenticate-3f621.firebaseio.com",
    projectId: "authenticate-3f621",
    storageBucket: "authenticate-3f621.appspot.com",
    messagingSenderId: "219452401301",
    appId: "1:219452401301:web:6144056d33782178eddd9c",
    measurementId: "G-C7HPEGGGC4"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  export default firebase;