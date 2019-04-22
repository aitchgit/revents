import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDSD1PKnUaEfiMO7gHTXO-ez0IgRzDAAfc",
  authDomain: "revents-7a258.firebaseapp.com",
  databaseURL: "https://revents-7a258.firebaseio.com",
  projectId: "revents-7a258",
  storageBucket: "revents-7a258.appspot.com",
  messagingSenderId: "272265851867"
}

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
}
firestore.settings(settings)
export default firebase;