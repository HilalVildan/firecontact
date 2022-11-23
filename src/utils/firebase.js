// Import the functions you need from the SDKs you need
// import { getAuth } from "firabese/auth";
import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  remove,
  update,
} from "firebase/database";
import { useEffect, useState } from "react";
import Toastify from "./Toastify";

// import { useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //  REACT_APP_API_KEY
  // REACT_APP_AUTH_DOMAIN
  // REACT_APP_DATABASE_URL
  // REACT_APP_PROJECT_ID
  // REACT_APP_STORAGE_BUCKET
  // REACT_APP_MESSAGING_SENDER_ID
  // REACT_APP_APP_ID

  apiKey:process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOM,
  databaseURL: process.env.REACT_APP_DATABASE_URL ,
  projectId: process.env.REACT_APP_PROJECT_ID ,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET , 
  messagingSenderId: process.env.REACT_APP_MESSAGIGN_SENDER_ID , 
  appId: process.env.REACT_APP_APP_ID
}

// console.log(firebaseConfig);
// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;

// Firebase veri ekleme
export const AddUser = (info) => {
  const db = getDatabase(firebase);

  const userRef = ref(db, "users/");
  const newUserRef = push(userRef);

  set(newUserRef, {
    username: info.username,
    phoneNumber: info.phoneNumber,
    gender: info.gender,
  });
  Toastify("Added Successfully");
};


// Firebasedan Veri Çekme
export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [contactList, setContactList] = useState();
  useEffect(() => {
    const db = getDatabase(firebase);
    const userRef = ref(db, "users/");

    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const userArray = [];

      for (let id in data) {
        userArray.push({ id, ...data[id] });
      }
      setContactList(userArray);
      setIsLoading(false);
    });
  }, []);

  return { isLoading, contactList };
};

// Veriyi Silme

export const DeleteUser = (id) => {
  const db = getDatabase(firebase);
  remove(ref(db, "users/" + id));
  Toastify("Deleted Successfully");
};

// Veriyi Değiştirme

export const UpdateUser = (info) => {
  const db = getDatabase(firebase);
  // const userRef = ref(db, "users/");
  const updates = {};

  updates["users/" + info.id] = info;

  return update(ref(db), updates);
};
