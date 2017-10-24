import firebase from 'firebase';
import Rebase from 're-base';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyD40BsaCW0wyuPVeLzJ2TkJsuovPO2aaLM',
  authDomain: "mloureiro-lunch-time.firebaseapp.com",
  databaseURL: 'https://mloureiro-lunch-time.firebaseio.com',
});

const db = firebase.database(app);
const base = Rebase.createClass(db);

export { app };

export default base;
