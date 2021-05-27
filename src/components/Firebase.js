import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBPvqf4rGEFTV8D1HBA3BTYE8NoBa7t49w",
    authDomain: "fir-27aa0.firebaseapp.com",
    projectId: "fir-27aa0",
    storageBucket: "fir-27aa0.appspot.com",
    messagingSenderId: "777217379687",
    appId: "1:777217379687:web:8648327f8a55f96092f3c2",
    measurementId: "G-S7NETP8HGG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };