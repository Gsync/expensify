import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export { firebase, googleAuthProvider, database as default };

//   database.ref().set({
//     name: "Test Name",
//     age: 43,
//     Completed: true,
//     location: {
//         city: "Calgary",
//         Country: "Canada"
//     }
//   }).then(() => {
//       console.log('Data is saved');
//   }).catch((error) => {
//     console.log('This failed: ', error);
//   });

// database.ref('expenses').push({
//     description: "Rent",
//     note: "",
//     amount: 109500,
//     createdAt: 965877777
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach(element => {
//         expenses.push({
//             id: element.key,
//             ...element.val()
//         });
//     });
//     console.log(expenses);
//   });

