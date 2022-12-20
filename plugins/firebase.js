// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMxv_nYcakrmU9hRXxxBxm5eA6ANx8NuM",
  authDomain: "cloudchatrahq.firebaseapp.com",
  projectId: "cloudchatrahq",
  storageBucket: "cloudchatrahq.appspot.com",
  messagingSenderId: "838435095918",
  appId: "1:838435095918:web:d885f78c0d72bfd2dd6d7f",
  measurementId: "G-MCLNWFPN7B",
};

export default defineNuxtPlugin(() => {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
});
