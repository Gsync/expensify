import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyA93kA68KVUYXU42I000rfoK2-X-ekAfrM",
    authDomain: "expensify-react-demo.firebaseapp.com",
    databaseURL: "https://expensify-react-demo.firebaseio.com",
    projectId: "expensify-react-demo",
    storageBucket: "expensify-react-demo.appspot.com",
    messagingSenderId: "120917336997"
  };

  firebase.initializeApp(config);

  const database = firebase.database();

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

database.ref('Completed')
    .remove()
    .then(function () {
        console.log("Remove succeeded.")
    })
    .catch(function (error) {
        console.log("Remove failed: " + error.message)
    });
