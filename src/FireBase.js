import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyDt59DbamqDTbNzX7MpRdhptRV7NX-hbQs",
  authDomain: "netflix-clone-b3dc0.firebaseapp.com",
  projectId: "netflix-clone-b3dc0",
  storageBucket: "netflix-clone-b3dc0.appspot.com",
  messagingSenderId: "478356071558",
  appId: "1:478356071558:web:3a6f56000b66e4a8f35d07",
  measurementId: "G-00624PB517"
};

initializeApp(firebaseConfig);
const db =getFirestore();
const auth =getAuth();

export {auth};
export default db;