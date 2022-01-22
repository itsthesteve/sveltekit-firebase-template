import { getApp, getApps, initializeApp } from 'firebase/app';

// Add your firebase project config here.
const FIREBASE_CONFIG = {
	apiKey: '',
	authDomain: '',
	projectId: '',
	storageBucket: '',
	messagingSenderId: '',
	appId: ''
};

const app = getApps().length ? getApp() : initializeApp(FIREBASE_CONFIG);

export { app, FIREBASE_CONFIG };
