import { mode } from '$app/env';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { app } from './init';

const auth = getAuth(app);

if (mode === 'development') {
	// Same as the auth port in firebase.json
	connectAuthEmulator(auth, 'http://localhost:9099');
}

export { auth };
