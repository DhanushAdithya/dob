import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
	apiKey: process.env.FB_API_KEY,
	authDomain: `${process.env.FB_ID}.firebaseapp.com`,
	databaseURL: `https://${process.env.FB_ID}.firebaseio.com`,
	projectId: process.env.FB_ID,
	storageBucket: `${process.env.FB_ID}.appspot.com`,
	messagingSenderId: process.env.FB_MSG_ID,
	appId: process.env.FB_APP_ID,
	measurementId: process.env.FB_MEASUREMENT_ID,
}

firebase.initializeApp(config)
firebase.analytics()
firebase.firestore()

export default firebase
