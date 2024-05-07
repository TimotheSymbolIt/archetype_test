import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// Follow this pattern to import other Firebase services

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyByMuBjCSqF9yJuCB6luaL_9HBxY3sTc6E",
	authDomain: "test-40bd9.firebaseapp.com",
	projectId: "test-40bd9",
	storageBucket: "test-40bd9.appspot.com",
	messagingSenderId: "712252547007",
	appId: "1:712252547007:web:373ee1793b64f4c35c0b0a",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseDb = getFirestore(firebaseApp);

export { firebaseDb };
