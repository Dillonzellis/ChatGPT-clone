import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzbdVFIAdrIWvgn_xqH6hqMWR1rdiqQCE",
  authDomain: "chatgpt-messenger-c8430.firebaseapp.com",
  projectId: "chatgpt-messenger-c8430",
  storageBucket: "chatgpt-messenger-c8430.appspot.com",
  messagingSenderId: "441479280244",
  appId: "1:441479280244:web:a17a888bf2a62f17abc321",
};

// Initialize Firebase
const app = getApps().length
  ? getApp()
  : initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
