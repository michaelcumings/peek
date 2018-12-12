import firebase from "firebase";
var config = {
    apiKey: "AIzaSyCTtdBveH4rex039u5Fh_gEXNbK37ko1zQ",
    authDomain: "peek-2fb5b.firebaseapp.com",
    databaseURL: "https://peek-2fb5b.firebaseio.com",
    projectId: "peek-2fb5b",
    storageBucket: "peek-2fb5b.appspot.com",
    messagingSenderId: "511969212938"
  };

  const fb = firebase.initializeApp(config);
export default fb;