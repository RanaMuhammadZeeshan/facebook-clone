import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCRpZ-c2TCxMv0snOIz0voWshF7CSDrWeg",
  authDomain: "facebook-clone-44398.firebaseapp.com",
  databaseURL: "https://facebook-clone-44398.firebaseio.com",
  projectId: "facebook-clone-44398",
  storageBucket: "facebook-clone-44398.appspot.com",
  messagingSenderId: "45814374933",
  appId: "1:45814374933:web:58eb8825a7082f7567e41c",
  measurementId: "G-SQQYP4C08S",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
