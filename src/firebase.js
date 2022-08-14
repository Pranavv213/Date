import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyA7QVBQNM6TjhvvBiFhENyIeiccJY4nlmI",
  authDomain: "date-a4c64.firebaseapp.com",
  projectId: "date-a4c64",
  storageBucket: "date-a4c64.appspot.com",
  messagingSenderId: "832868718381",
  appId: "1:832868718381:web:d1fb41a9bf19e8aa3825a4",
  
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth=firebase.auth()
const firestore = firebase.firestore()
export const database={
    users:firestore.collection('users')
}
export const storage=firebase.storage()



