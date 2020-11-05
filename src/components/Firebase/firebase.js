import app from "firebase/app"
import "firebase/auth"

const config = {
    apiKey: "AIzaSyD-QNnoWKhSobzj4QosqoJBNw1mYQe6AB0",
    authDomain: "marvel-quiz-bde6a.firebaseapp.com",
    databaseURL: "https://marvel-quiz-bde6a.firebaseio.com",
    projectId: "marvel-quiz-bde6a",
    storageBucket: "marvel-quiz-bde6a.appspot.com",
    messagingSenderId: "885684265293",
    appId: "1:885684265293:web:4c638dacfd3d2b0379d704"
};

class Firebase {
    constructor() {
        app.initializeApp(config)

        this.auth = app.auth()
    }

    // Inscription de l'utilisateur
    signupUser = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password)

    // Connexion utilisateur
    loginUser = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password)

    // Deconnexion de l'utilisateur
    signoutUser = () => this.auth.signout()
}

export default Firebase