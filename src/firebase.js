import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCb5VNA5iDIQJnkc6Zh8JL0qtiJ3UgbNfo",
    authDomain: "robinhood-6df65.firebaseapp.com",
    projectId: "robinhood-6df65",
    storageBucket: "robinhood-6df65.appspot.com",
    messagingSenderId: "622151437721",
    appId: "1:622151437721:web:4b0d9d88f30789461c1708"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };