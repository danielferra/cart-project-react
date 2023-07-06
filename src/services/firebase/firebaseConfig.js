
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyClQ61onjPwA3A_vBlvLpLHrB_55HVnefI",
  authDomain: "project-react-d56bc.firebaseapp.com",
  projectId: "project-react-d56bc",
  storageBucket: "project-react-d56bc.appspot.com",
  messagingSenderId: "240562253502",
  appId: "1:240562253502:web:1825ddd4e78a6a265bb8ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)