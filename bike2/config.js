import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyBtriv-x_8ru-LsPLg8Jj7E21V1h0oT84k",
  authDomain: "bike2-72ace.firebaseapp.com",
  databaseURL: "https://bike2-72ace-default-rtdb.firebaseio.com",
  projectId: "bike2-72ace",
  storageBucket: "bike2-72ace.appspot.com",
  messagingSenderId: "938640480128",
  appId: "1:938640480128:web:a87902e7575a09a3f15365"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
