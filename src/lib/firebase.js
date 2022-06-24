import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIZkrR3pATElFVgJDgrxBpJTtd03Sng20",
  authDomain: "hoang-first-use-firebase.firebaseapp.com",
  projectId: "hoang-first-use-firebase",
  storageBucket: "hoang-first-use-firebase.appspot.com",
  messagingSenderId: "948717231626",
  appId: "1:948717231626:web:baef6d65387108a51309f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);