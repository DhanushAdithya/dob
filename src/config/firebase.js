import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
	apiKey: process.env.FB_API_KEY,
	authDomain: `dobg-26dd9.firebaseapp.com`,
	databaseURL: `https://dobg-26dd9.firebaseio.com`,
	projectId: 'dobg-26dd9',
	storageBucket: `dobg-26dd9.appspot.com`,
	messagingSenderId: process.env.FB_MSG_ID,
	appId: process.env.FB_APP_ID,
	measurementId: process.env.FB_MEASUREMENT_ID,
}

firebase.initializeApp(config)
firebase.analytics()
firebase.firestore()

export default firebase
