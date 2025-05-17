# Padre Gino's

Padre Gino’s is a React + Vite pizza ordering app that is responsive to all devices, supports keyboard navigation, is compatible with screen readers, and optimized for performance metrics. It includes unit tests and automated tests that cover both key user flows and accessibility.

## Starting the API

An API is included to serve the pizza list data required by the app. To start it, navigate to the api folder and run `npm start`. The API will run on port 3000. Vite dev server runs on a different port and to avoid CORS issues, it’s configured to proxy API requests.

## Starting the app

From the root folder, run `npm run dev` to start the Vite development server. The app will be available at port 5173 (or another available port if that one is in use). Any changes to the source code will be hot-reloaded automatically — no need to refresh the browser manually.
