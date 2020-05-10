import firebase from 'firebase/app'
import 'firebase/firestore'

export const db = firebase
    .initializeApp({
        apiKey: "AIzaSyAtcE2pBY_45w5w19QVCQgfHYUyrtgIguc",
        authDomain: "vue-crud2.firebaseapp.com",
        databaseURL: "https://vue-crud2.firebaseio.com",
        projectId: "vue-crud2",
        storageBucket: "vue-crud2.appspot.com",
        messagingSenderId: "588803024622",
        appId: "1:588803024622:web:8a24af485cd1928d3bb5ff"
    })
    .firestore()

    export const postRef = db.collection('posts')
    export const favRef = db.collection('favs')