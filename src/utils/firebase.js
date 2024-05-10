// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVMw3R5Rft1aFKOlfyuEzRzPee1S_fH3s",
  authDomain: "netflixclone-3ee75.firebaseapp.com",
  projectId: "netflixclone-3ee75",
  storageBucket: "netflixclone-3ee75.appspot.com",
  messagingSenderId: "459215446914",
  appId: "1:459215446914:web:5def653a900322a91b659b",
  measurementId: "G-DEXKNZSV85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();