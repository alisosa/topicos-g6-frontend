import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// This is a test
const firebaseConfig = {
  apiKey: "AIzaSyDpItVcpMT_bWbHp0ByrhRIqNSf94_IwXk",
  authDomain: "topicos---deres.firebaseapp.com",
  projectId: "topicos---deres",
  storageBucket: "topicos---deres.appspot.com",
  messagingSenderId: "769874137744",
  appId: "1:769874137744:web:862dc384d612a4da823e15",
  measurementId: "G-SNLVSL9YQC"
};

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//   measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
// };

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };