import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCEYWuETiKOYvw7jFex6LHr6ZIE2nl1vOU",
  authDomain: "linkedin-lite-7c27b.firebaseapp.com",
  projectId: "linkedin-lite-7c27b",
  storageBucket: "linkedin-lite-7c27b.appspot.com",
  messagingSenderId: "51458364764",
  appId: "1:51458364764:web:186270bdd2ad0725a35d99"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};

export default db;
