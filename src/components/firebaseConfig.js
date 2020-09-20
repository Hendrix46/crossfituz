import firebase  from "firebase";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyD8d0inBZ3zaBc-DS5proucXL4X5IipSgc",
    authDomain: "crossfituz-c4619.firebaseapp.com",
    databaseURL: "https://crossfituz-c4619.firebaseio.com",
    projectId: "crossfituz-c4619",
    storageBucket: "crossfituz-c4619.appspot.com",
    messagingSenderId: "273627916239",
    appId: "1:273627916239:web:2c931663f3dd8631db14ba",
    measurementId: "G-CN4T8Q7VS7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage=firebase.storage();


export {storage , firebase as default};