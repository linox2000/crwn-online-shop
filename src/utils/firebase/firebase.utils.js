// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5yiHbgLCU0ZsuHOkJkwO9Nk-Q9qwRG7c",
  authDomain: "crwnv2.firebaseapp.com",
  projectId: "crwnv2",
  storageBucket: "crwnv2.appspot.com",
  messagingSenderId: "742752524012",
  appId: "1:742752524012:web:2bc58c508d1ceed569b7c9",
  measurementId: "G-ZXQ6E4GVYQ",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

// AUTH USER WITH GOOGLEPOPUP
export const siginInWithGooglePopup = () => signInWithPopup(auth, provider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();

// CREATING A NEW USER 
export const createUserDocumentFromAuth = async (userAuth,additionalInformation ={}) => {
  if(!userAuth )return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};
//AUTH USER WITH  WITH EmailAndPassword
export const createAuthUserWithEmailAndPassword = async(email,password,displayName)=>{
  if(!email || !password)return;
  return await createUserWithEmailAndPassword(auth,email,password,displayName)
}
export const signInAuthUserWithEmailAndPassword = async(email,password,displayName)=>{
  if(!email || !password)return;
  return await signInWithEmailAndPassword(auth,email,password,displayName)
}
