import Rebase from 're-base';
import firebase from 'firebase';

// Database App
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBzzCZLKIY_nNm8qafpUgVyaNOYFpybISE",
    authDomain: "mug-of-the-day.firebaseapp.com",
    databaseURL: "https://mug-of-the-day.firebaseio.com"
})

// Rebase Binding
const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;