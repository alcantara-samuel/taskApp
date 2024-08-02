import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnTGvWpIoHh2Z2YLsuci3sOvC_HAGoCZk",
  authDomain: "tarefasplus-46c14.firebaseapp.com",
  projectId: "tarefasplus-46c14",
  storageBucket: "tarefasplus-46c14.appspot.com",
  messagingSenderId: "495953560842",
  appId: "1:495953560842:web:57e188bfc6cd59b96fa6f3",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };
