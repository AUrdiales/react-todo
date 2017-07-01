import firebase from 'firebase';

//start firebase
var config = {
    apiKey: "AIzaSyC88-q8X-frRiQoyyO-uJwUPKfl9UD5l4M",
    authDomain: "todoapp-9ac46.firebaseapp.com",
    databaseURL: "https://todoapp-9ac46.firebaseio.com",
    projectId: "todoapp-9ac46",
    storageBucket: "todoapp-9ac46.appspot.com",
    messagingSenderId: "62476436473"
  };
  firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

   firebaseRef.set({
        app: {
          name:'Todo App',
          version: "1.0.0"
        },
        isRunning: true,
        user: {
          name: 'Alex',
          age: 23
        } 
      });

      //las 2 duncionan igual en el sentido que cambian solo el valor de name en app
      // firebaseRef.update({
      //   isRunning: false,
      //   'app/name': 'Todo Application'
      // });

      // firebaseRef.child('app').update({
      //   name: 'Todo Application'
      // });

      // firebaseRef.update({
      //  'app/name': ' Todo Application',
      //  'user/name': 'Oscar'
      // });


//    las dos hacen lo mismo eliminan un valor de la db
      // firebaseRef.child('app/name').remove();

      // firebaseRef.child('app').update({
      //   version: '2.0',
      //   name: null
      // });
      
      // llamar a la db y que te devuelva los datos
      // firebaseRef.once('value').then((snapshot) => {
      //   console.log('Got entire db', snapshot.val());
      // },(e) => {
      //   console.log('unable to fetch value', e)
      // });
      // //llamar a un objeto de la db
      //  firebaseRef.child('app').once('value').then((snapshot) => {
      //   console.log('Got entire db', snapshot.key, snapshot.val());
      // },(e) => {
      //   console.log('unable to fetch value', e)
      // });
      //activa un listener que escuchara todos los cambios


      //definimos la respuesta para poder apagarla a gusto de cada uno
      // var logData = (snapshot) => {
      //   console.log('got value', snapshot.val());
      // };

//       // firebaseRef.on('value', logData);
//       // //apagara el listener anterior
//       // firebaseRef.off(logData);

//       // firebaseRef.update({
//       //   isRunning: false
//       // });

// // firebaseRef.child('user').on('value', logData);

// // firebaseRef.child('user').update({
// //   name: 'Oscar'
// // });

// var notesRef = firebaseRef.child('notes');

// notesRef.on('child_added', (snapshot) => {
//   console.log('child added', snapshot.key, snapshot.val());
// });

// notesRef.on('child_removed', (snapshot) => {
//   console.log('child removed', snapshot.key, snapshot.val());
// });

// notesRef.on('child_changed', (snapshot) => {
//   console.log('child changed', snapshot.key, snapshot.val());
// });

// var newNoteRef =notesRef.push({
//   text: 'programm a little bit!'
// });

// console.log('new note ID', newNoteRef.key);


var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('child added', snapshot.key, snapshot.val());
});

todosRef.on('child_changed', (snapshot) => {
  console.log('child changed', snapshot.key, snapshot.val());
});

todosRef.on('child_removed', (snapshot) => {
  console.log('child removed', snapshot.key, snapshot.val());
});

var newTodo = (todo) => {
  var name = todo['name'];
  todosRef.push({
    name: todo['value']
  });
};

var todos = {
  name: 'text',
   value: 'drink'
  };

  var todo2 = {
    name: 'text',
    value: 'eat'
  }

newTodo(todos);
newTodo(todo2)