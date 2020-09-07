import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
	apiKey: process.env.REACT_APP_FB_API_KEY,
	authDomain: `${process.env.REACT_APP_FB_ID}.firebaseapp.com`,
	databaseURL: `https://${process.env.REACT_APP_FB_ID}.firebaseio.com`,
	projectId: process.env.REACT_APP_FB_ID,
	storageBucket: `${process.env.REACT_APP_FB_ID}.appspot.com`,
	messagingSenderId: process.env.REACT_APP_FB_MSG_ID,
	appId: process.env.REACT_APP_FB_APP_ID,
	measurementId: process.env.REACT_APP_FB_MEASUREMENT_ID,
}

firebase.initializeApp(config)
firebase.analytics()
firebase.firestore()

export default firebase
