/* eslint-disable no-unused-vars */
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBVI34BvKzyW6JVsj0ZhxpoKCSCQFXtxtM",
    authDomain: "linkedin-clone-5ef14.firebaseapp.com",
    projectId: "linkedin-clone-5ef14",
    storageBucket: "linkedin-clone-5ef14.appspot.com",
    messagingSenderId: "566464857746",
    appId: "1:566464857746:web:ef28268380ccd6876e884b"
  };

  // initialize firebase App
  const firebaseApp = firebase.initializeApp(firebaseConfig)

  // functions db and auth
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export { db, auth }