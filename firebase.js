// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";
import { getFirestore, collection, addDoc, getDocs, query, where, updateDoc, doc,getDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateEmail,sendEmailVerification , reauthenticateWithCredential, EmailAuthProvider , } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBsvrAz-oAE9GdxN3kE_UuTc41mWOy8knw",
    authDomain: "sign-form-1e68e.firebaseapp.com",
    projectId: "sign-form-1e68e",
    storageBucket: "sign-form-1e68e.appspot.com",
    messagingSenderId: "858283324672",
    appId: "1:858283324672:web:dc611c8aca701356dfefe5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);


export {
    app,
    // authientation
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    updateEmail,
    sendEmailVerification,
    reauthenticateWithCredential, 
    EmailAuthProvider ,
    //firestore
    db,
    collection,
    addDoc,
    getDocs,
    query,
    where,
    updateDoc,
    doc,
    getDoc,
    // storage
    storage,
    ref,
    uploadBytes,
    getDownloadURL
}