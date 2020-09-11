import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBcvjRZsZRCSVNep57wpj-gdtn_1NDzT4g",
    authDomain: "deployment-test-f9a93.firebaseapp.com",
    databaseURL: "https://deployment-test-f9a93.firebaseio.com",
    projectId: "deployment-test-f9a93",
    storageBucket: "deployment-test-f9a93.appspot.com",
    messagingSenderId: "935071273510",
    appId: "1:935071273510:web:ca85ca22e877d87357cce7",
    measurementId: "G-BMREMPGR6B"
};

firebase.initilizeApp(firebaseConfig);
firebase.analytics();

export default firebase;