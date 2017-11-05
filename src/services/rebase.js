import firebase from 'firebase';
import Rebase from 're-base';
import { firebase as config } from '../config.json';

const app = firebase.initializeApp(config);

const db = firebase.database(app);
const base = Rebase.createClass(db);

export { app };

export default base;
