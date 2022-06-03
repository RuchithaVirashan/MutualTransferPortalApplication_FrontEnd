# MUTUAL TRANSFER PORTAL FRONTEND :briefcase: 

This is a React frontend for a fake mutual transfer application website to go along with [this](https://github.com/RuchithaVirashan/MutualTransferPortalApplication_BackEnd) backend.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Technologies :man_scientist:

1. JavaScript
2. React, Create React App
3. Tailwind CSS
4. React-router-dom
5. Axios
6. Additional libraries: icons, uuid

## Features :palm_tree:

1. Registration and Authentication
2. Filtering and searching for transfer request
3. Viewing profile information
4. Dislaying list of posted trnsfers and ditails

## Approach :man_student:

1. Created reusable components representing Posts, Users, Forms, etc
2. Can be logged as an admin or normal user
3. Implemented routing via react-router-dom switch component
4. Authentication via JWTs, localStorage used to enable user to persist between refreshes and browser closing/opening
5. Included error handling and pages: for unauthorised access, for missing page & wrong URL

## For developers: 

##### To run: 

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

Backend ([repo](https://github.com/RuchithaVirashan/MutualTransferPortalApplication_BackEnd)) can be run on port 8080. 

##### To run tests: 

`npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

##### To build for production:

`npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
