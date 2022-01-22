<script lang="ts">
	import { FIREBASE_CONFIG } from '$lib/firebase';
	const { projectId } = FIREBASE_CONFIG;

	// Change as needed
	fetch(`http://localhost:5001/${projectId}/us-central1/helloWorld`)
		.then((res) => res.json())
		.then(console.log);
</script>

<code>Firebase template</code>
<slot />
