import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBrEFD3dO-bvO_BjjQYr2cqVxjybNEAYv8",
  authDomain: "netflix-clone-lld.firebaseapp.com",
  projectId: "netflix-clone-lld",
  storageBucket: "netflix-clone-lld.appspot.com",
  messagingSenderId: "79194712475",
  appId: "1:79194712475:web:edbc40d22c200ecd4b993e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default database;
