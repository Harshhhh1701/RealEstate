// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-cd604.firebaseapp.com",
  projectId: "realestate-cd604",
  storageBucket: "realestate-cd604.appspot.com",
  messagingSenderId: "936820592844",
  appId: "1:936820592844:web:263920af763030c3d77269"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);