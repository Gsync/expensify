import { firebase, googleAuthProvider } from '../firebase/firebase';

//start the login process and return a function to call firebase related method
export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};