import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const FirebaseCredentials = {
  apiKey: "AIzaSyAYG25pNlgKERf2l4bOLslk410W9DI1HkA",
  authDomain: "web3project-f0205.firebaseapp.com",
  projectId: "web3project-f0205",
  storageBucket: "web3project-f0205.appspot.com",
  messagingSenderId: "591236041654",
  appId: "1:591236041654:web:bfb7f08b1f2fad0fde4f17",
  measurementId: "G-FBR5EK9SPT"
};

console.log("Variable:",process.env.DB_HOST)
const app = getApps().length === 0 ? initializeApp(FirebaseCredentials) : getApp()
const db = getFirestore(app)

export {db}