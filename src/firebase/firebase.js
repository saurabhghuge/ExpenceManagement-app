import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAXNqotg3nfLtYXXusCyZTgKw2g9Yt-yFk",
    authDomain: "expensemanagement-app.firebaseapp.com",
    databaseURL: "https://expensemanagement-app.firebaseio.com",
    projectId: "expensemanagement-app",
    storageBucket: "expensemanagement-app.appspot.com",
    messagingSenderId: "1067712980802",
    appId: "1:1067712980802:web:0496db2186d2f10a188adb",
    measurementId: "G-B5KWE4KZQG"
  };

  firebase.initializeApp(firebaseConfig);
  const database =   firebase.database();
database.ref().set({
    name: 'saurabh ghuge',
    age : 23,
    attributes: {
        height : 32,
        weight: 87
    },
    locations : "mumbai",
    isSingle: false 
});

database.ref("age").set(98);