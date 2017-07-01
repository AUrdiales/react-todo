import firebase from 'firebase';

//start firebase

try {
    var config = {
    apiKey: "AIzaSyC88-q8X-frRiQoyyO-uJwUPKfl9UD5l4M",
    authDomain: "todoapp-9ac46.firebaseapp.com",
    databaseURL: "https://todoapp-9ac46.firebaseio.com",
    projectId: "todoapp-9ac46",
    storageBucket: "todoapp-9ac46.appspot.com",
    messagingSenderId: "62476436473"
  };
  firebase.initializeApp(config);
} catch(e) {

} finally {

}

export var firebaseRef = firebase.database().ref();

export default firebase;