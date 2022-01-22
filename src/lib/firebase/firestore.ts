import { mode } from '$app/env';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { app } from './init';

const firestore = getFirestore(app);

if (mode === 'development') {
	// Same as the firestore port in firebase.json
	connectFirestoreEmulator(firestore, 'http://localhost', 8081);
}

export { firestore };
