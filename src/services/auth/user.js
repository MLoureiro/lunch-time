import { app } from '../rebase';
import firebase from 'firebase';

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('profile');

export async function loginWithGoogle() {
  try {
    // const user = await app.auth().signInWithPopup(provider);
    await app.auth().signInWithRedirect(provider);

    return true;
  } catch (error) {
    return false;
  }
}

export const userIdManager = {
  storageKey: 'fb.auth.key',
  set(uid) {
    localStorage.setItem(this.storageKey, uid);
  },
  get() {
    localStorage.getItem(this.storageKey);
  },
  remove() {
    localStorage.removeItem(this.storageKey);
  }
};

export function isAuthenticated() {
  return !!auth.currentUser || !!userIdManager.get();
}

export function getCurrentUser() {
  return app.auth().currentUser;
}
