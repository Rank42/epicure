import firebase from 'firebase/app'
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyAxCVhU_s-5Fe9FJq5K5x1UDPci6tsfN-s",
    authDomain: "epicure-c3b74.firebaseapp.com",
    databaseURL: "https://epicure-c3b74.firebaseio.com",
    projectId: "epicure-c3b74",
    storageBucket: "epicure-c3b74.appspot.com",
    messagingSenderId: "461420341264",
    appId: "1:461420341264:web:c86dcbe318e0513b008295"
};

firebase.initializeApp(config);

const db = firebase.firestore();

export const fetchRestaurants = () =>{
    return db.collection('restaurants').get();
}

export const fetchDishes = () =>{
    return db.collection('dishes').get();
}

export const fetchChefs = () =>{
    return db.collection('chefs').get();
}