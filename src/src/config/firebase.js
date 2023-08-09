import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBENaMgDt3AD-kJPPBVFdvip_KGkSdOyqM",
  authDomain: "generic-name-6bf5e.firebaseapp.com",
  projectId: "generic-name-6bf5e",
  storageBucket: "generic-name-6bf5e.appspot.com",
  messagingSenderId: "127431951994",
  appId: "1:127431951994:web:f5999c76e2eae3646f5dc3",
  measurementId: "G-72V08B2HJZ"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

