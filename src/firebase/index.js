import app from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const config = {
  apiKey: "AIzaSyBnGNTanSV6KD9GOxXUXQ29iGUysNPaLNM",
  authDomain: "perseduler.firebaseapp.com",
  databaseURL: "https://perseduler.firebaseio.com",
  projectId: "perseduler",
  storageBucket: "perseduler.appspot.com",
  messagingSenderId: "719028451432",
  appId: "1:719028451432:web:a5738df4b32f084e50e3dd",
  measurementId: "G-MGJNDW5248"
}

class Firebase {
  constructor() {
    // https://github.com/zeit/next.js/issues/1999
    if (!app.apps.length) {
      app.initializeApp(config)
      this.auth = app.auth()
      this.db = app.firestore()
      this.providers = {
        google: new app.auth.GoogleAuthProvider()
      }
    }
  }

  async register(name, email, password) {
    return this.auth.currentUser.updateProfile({
      displayName: name
    })
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  loginWithPopup(provider) {
    if (this.providers[provider]) {
      return this.auth.signInWithPopup(this.providers[provider])
    }
  }

  logout() {
    return this.auth.signOut()
  }

  isInitialized() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve)
    })
  }

  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName
  }
}

export default new Firebase()
