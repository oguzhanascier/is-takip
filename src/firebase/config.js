import firebase from "firebase/compat/app";

import "firebase/compat/firestore";

import "firebase/compat/auth";

const firebaseConfig = {

    apiKey: "AIzaSyDFVqNoH3zchuEHkAbdqdVpgQLuheBE-CQ",

    authDomain: "blog-app-7cc8a.firebaseapp.com",

    databaseURL: "https://blog-app-7cc8a-default-rtdb.firebaseio.com",

    projectId: "blog-app-7cc8a",

    storageBucket: "blog-app-7cc8a.appspot.com",

    messagingSenderId: "291121184274",

    appId: "1:291121184274:web:f3b236ef31a6a7c5d122cb",

    measurementId: "G-RV1KELVHXM"

};

firebase.initializeApp(firebaseConfig);
const firestoreRef=firebase.firestore();
const authRef=firebase.auth();
const tarih=firebase.firestore.FieldValue.serverTimestamp()