// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBC6SJmS9C8tMapV2TnKcGDePB8eL8adHA",
  authDomain: "brijesh-vekariya-bc7c6.firebaseapp.com",
  projectId: "brijesh-vekariya-bc7c6",
  storageBucket: "brijesh-vekariya-bc7c6.firebasestorage.app",
  messagingSenderId: "494997103715",
  appId: "1:494997103715:web:e5fdd51d2491391f1e8456",
  measurementId: "G-BBFBXGYMNN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
