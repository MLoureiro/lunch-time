import firebase from 'firebase';

export class Firebase {
  static _app = null;

  static app() {
    if (this._app === null) {
      this._app = firebase.initializeApp({
        apiKey: 'AIzaSyD40BsaCW0wyuPVeLzJ2TkJsuovPO2aaLM',
        databaseURL: 'https://mloureiro-lunch-time.firebaseio.com',
      });
    }

    return this._app;
  }
}
