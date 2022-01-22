# Sveltekit Firebase template

This is a standard [SvelteKit](https://kit.svelte.dev/docs) install, adding Firebase with emulators.

Minor boilerplate code has been added to `src/lib/firebase` that initializes the Firebase app and a few helper files for auth and Firestore.

## Using this template

Clone with `degit` and add your project configurations

```bash
$ npx degit <github url> my-project
$ cd my-project

# install base deps and functions deps
$ yarn install; cd functions; yarn install
```

## ❗️Before you begin❗️

**Add the Firebase config provided to you in your Firebase project console to `src/lib/firebase/init.ts` and the project name to `.firebaserc`**

### Running the project

There are 3 scripts that need to be run if using all the features:

- SvelteKit dev server
- Firebase emulator
- Firebase functions TypeScript watcher

--------------------------------------------------------------------------------

Run what you need in different terminal windows:

SvelteKit dev server on `:3000`

```bash
yarn dev
```

Firebase emulator suite with UI at `:4000`. See `firebase.json` for which ports are to be used.

```bash
yarn emulate
```

Functions are set up with TypeScript, so you'll need to run the watch script (or roll your own script that uses `ts-node` etc):

```bash
cd functions;
yarn dev
```

Only authentication and Firestore are set up for use with emulation. For adding other emulator hooks, see the [Firebase emulator Suite](https://firebase.google.com/docs/emulator-suite) docs.
