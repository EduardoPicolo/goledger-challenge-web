# [Goledger front-end challenge](https://goledger-challenge.vercel.app/)

## To run the project locally in development mode:

1. Clone the repository;
   `git clone https://github.com/EduardoPicolo/goledger-challenge-web.git`

2. Enter the project directory:  
   `cd goledger-challenge-web/goledger-challenge`

3. Install project dependencies:  
   `npm install` ou `yarn`

4. Run:
   `npm run dev` ou `yarn dev`

### Application

- The app was built with Next.js because its a easy to work with framework, as exemple, every file in the pages directory is automatically converted to a route and its also easy to deploy. Next.js also comes with Serve Side Rendering (SRR) by default;
- The request are made with SWR, a library for smart data fetching, and custom hooks to handle loading states and erros.

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

### Improvement points

- _Dockerize_ the application, and;
- Create unit tests;
- TypeScript.
