import * as firebase from 'firebase';
import 'firebase/firebase-app';
import 'firebase/firestore';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyBNg14y_TU_UsXsBf0ekAqxOj8YELnklF4",
  authDomain: "baithi11.firebaseapp.com",
  databaseURL: "https://baithi11.firebaseio.com",
  projectId: "baithi11",
  storageBucket: "baithi11.appspot.com",
  messagingSenderId: "1045037027953",
  appId: "1:1045037027953:web:e4fac4e66e8081c3"
};

firebase.initializeApp(config);

firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 