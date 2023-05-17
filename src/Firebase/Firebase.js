import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const provider = new firebase.auth.GoogleAuthProvider();

const firebaseConfig = {
	apiKey: "AIzaSyC-aNpUCE_Opm1tateag6LidLwgd7x0vro",
	authDomain: "aurorachat-536d0.firebaseapp.com",
	projectId: "aurorachat-536d0",
	storageBucket: "aurorachat-536d0.appspot.com",
	messagingSenderId: "486834073042",
	appId: "1:486834073042:web:5b09ea4ebdfd1630b0ec0b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, provider, storage };
