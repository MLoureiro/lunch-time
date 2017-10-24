import { app } from '../rebase';
import firebase from 'firebase';

const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('profile');

export async function loginWithGoogle() {
  return app.auth()
    .signInWithPopup(provider);
    // .signInWithRedirect(provider);
}

export function getCurrentUser() {
  return app.auth().currentUser;
}
