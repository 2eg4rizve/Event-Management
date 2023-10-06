// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzApunKwhpdTre_TGKYs_gmdBiFeaUzco",
  authDomain: "assingnment-9.firebaseapp.com",
  projectId: "assingnment-9",
  storageBucket: "assingnment-9.appspot.com",
  messagingSenderId: "965973716350",
  appId: "1:965973716350:web:b72f7aa773c6e75c24572f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =getAuth(app);