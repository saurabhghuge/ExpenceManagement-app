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
  };

firebase.initializeApp(firebaseConfig);
const database =   firebase.database();

export{firebase, database as default};
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

//database.ref("expense/").set({
//     name: 'saurabh ghuge',
//     age : 34,
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

