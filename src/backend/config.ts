import firebase from "firebase/compat/app";
import 'firebase/firestore'

if(!firebase.app.length){
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_PROJECT_ID
    })
}

export default firebase
