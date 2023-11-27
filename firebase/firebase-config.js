import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUT2wah5gf0hw27AkYpzpP2THoge_0huU",
  authDomain: "ntf-app-d45a3.firebaseapp.com",
  projectId: "ntf-app-d45a3",
  storageBucket: "ntf-app-d45a3.appspot.com",
  messagingSenderId: "124789879568",
  appId: "1:124789879568:web:cd548f88d4948266f8eb95",
  measurementId: "G-WH5P9TY9Z3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = GoogleAuthProvider();

export { auth, provider };
