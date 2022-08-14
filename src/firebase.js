import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBR0M9Ksbrp2JdAQ_Kpa2ZsZQQ4a8Z9cUY",
  authDomain: "restaurant-7b1f1.firebaseapp.com",
  projectId: "restaurant-7b1f1",
  storageBucket: "restaurant-7b1f1.appspot.com",
  messagingSenderId: "902056945484",
  appId: "1:902056945484:web:5c648a069571f498bf91e9",
  
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth=firebase.auth()
const firestore = firebase.firestore()
export const database={
    users:firestore.collection('users')
}
export const storage=firebase.storage()



