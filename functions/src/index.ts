import * as functions from 'firebase-functions';
import * as cors from 'cors';

const corsResp = cors({
	origin: 'http://localhost:3000' // change origin as needed
});

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
	functions.logger.info('Hello logs!', { structuredData: true });
	corsResp(request, response, () => {
		return response.json({ status: 'ok', message: 'Hello from Firebase' });
	});
});
