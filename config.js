import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAt5_tLGbbnQCLh9uRQi3SXRccrK4eymXs",
  authDomain: "projectx-c3d7d.firebaseapp.com",
  projectId: "projectx-c3d7d",
  storageBucket: "projectx-c3d7d.appspot.com",
  messagingSenderId: "914337198308",
  appId: "1:914337198308:web:3ded3da48f4c3f70cdfcf1"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
