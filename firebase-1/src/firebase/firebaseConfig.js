import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCup3ImB2WXmJxGhXMRRAe7aBmd6ndRf3s",
    authDomain: "fir-project-1-179e8.firebaseapp.com",
    projectId: "fir-project-1-179e8",
    storageBucket: "fir-project-1-179e8.firebasestorage.app",
    messagingSenderId: "176423308273",
    appId: "1:176423308273:web:bba9c8c546c13c850cd250"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); //metodo que inicializa nuestra app de firebase

const db = getFirestore(app); //exportamos db para que este visible en todo el proyecto

export { db };