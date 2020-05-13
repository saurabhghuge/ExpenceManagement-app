import * as firebase from 'firebase';

  const firebaseConfig = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DATABASE_URL,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      measurementId: process.env.FIREBASE_MESUREMENT_ID 
        // apiKey: "AIzaSyAXNqotg3nfLtYXXusCyZTgKw2g9Yt-yFk",
        // authDomain: "expensemanagement-app.firebaseapp.com",
        // databaseURL: "https://expensemanagement-app.firebaseio.com",
        // projectId: "expensemanagement-app",
        // storageBucket: "expensemanagement-app.appspot.com",
        // messagingSenderId: "1067712980802",
        // appId: "1:1067712980802:web:0496db2186d2f10a188adb",
        // measurementId: "G-B5KWE4KZQG"
    };

  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();

  export { firebase, database as default };

    
  // console.log(`Database url is :${process.env.DATABASE_URL}`);
//   database.ref('expense').on('value',(snapshot)=>{
//       const expenses =[];
//       snapshot.forEach((childSnapshot)=>{
//           expenses.push({
//               id: childSnapshot.key,
//               ...childSnapshot.val()
//           });
//       });
//       console.log(expenses);
//   })
  
//   database.ref('expense').push({
//     description: 'Credit Card',
//     note: 'shopping',
//     amount: 4500,
//     createdAt: 4785
//   })

// database.ref("expense/").set({
//     name: 'saurabh ghuge',
//     age : 39,
//     attributes: {
//         height : 32,
//         weight: 87
//     },
//     locations : "mumbai",
//     isSingle: false 
// }).then(()=>{
//     console.log('data is saved');
// }).catch((e)=>{
//     console.log('this failed',e);
// });

// database.ref().on('value',(snapshot)=>{
//     console.log(snapshot.val());
//     const valf = snapshot.val();
//     console.log(snapshot.val().name + " lives in " + valf.locations );
// })

// setTimeout (()=>{
//     database.ref('locations').set('banglore');
// },3999);

