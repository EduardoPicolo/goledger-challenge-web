# Goledger front-end challenge

## To run the project locally in development mode:

1. Clone the repository;
   `git clone https://github.com/EduardoPicolo/goledger-challenge-web.git`

2. Enter the project directory:  
   `cd goledger-challenge-web/goledger-challenge`

3. Install project dependencies:  
   `npm install` or `yarn`

4. Run:
   `npm run dev` or `yarn dev`

### Application

- The app was built with Next.js because its a easy-to-work-with framework. As an exemple, every file in the pages directory is automatically converted to a route and its also easy to deploy. Next.js also comes with Serve Side Rendering (SRR) by default;
- The requests are made with SWR, a library for smart data fetching, and custom hooks to handle loading states and errors.

### Demo

![App running](demo.gif)

## Notes

The application was built with:

- Next.js v10;
- prop-types;
- [styled-components](https://styled-components.com/);
- [SWR](https://swr.vercel.app/);
- [react-hook-form](https://react-hook-form.com/);
- [react-toastify](https://github.com/fkhadra/react-toastify);
- [react-icons](https://react-icons.github.io/react-icons/);
- node-sass;
- ESLint.

To standardize the JS code, Prettier was used alongside ESLint with the [Airbnb styleguide](https://github.com/airbnb/javascript).

The application has loading status and errors prevention.

As the provided API uses HTTP, a deploy on Vercel or Netlify wasn't possible due to Content-Security-Policy restrictions.

### Improvement points

- _Dockerize_ the application, and;
- Create unit tests;
- Use TypeScript instead of JavaScript.
