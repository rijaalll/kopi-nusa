import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, update } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyB6c29IF2vgFZunbhZ4Uk8khaB2jKqrpBA",
    authDomain: "kopi-nusa-api.firebaseapp.com",
    databaseURL: "https://kopi-nusa-api-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "kopi-nusa-api",
    storageBucket: "kopi-nusa-api.firebasestorage.app",
    messagingSenderId: "940546892696",
    appId: "1:940546892696:web:1c08daf37d39b7f77ec1ed",
    measurementId: "G-XFGSPB7WYY"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set, get, update };