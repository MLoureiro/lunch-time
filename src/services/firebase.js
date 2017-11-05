import firebase from 'firebase';
import { firebase as config } from '../config.json';

const app = firebase.initializeApp(config);

export { app };
