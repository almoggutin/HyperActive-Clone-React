# HyperActive Clone App

In this repository you will find the source code of the homepage of the Hyperactive website.

[HyperActive Website](https://www.hyperactive.co.il/)

## Description

The point of this recreation is to improve CSS skills and to work with React components. This is not a full recreation of the website, only of the homepage.

## Technologies

The technologies that are in use are React.js for the frontend and Sass for styling.

## Available Scripts

In the project directory, you can run:

### `npm run client`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run dev`

Runs the app in the development mode including implementing changes when saving sass files.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run start`

Runs the app in production mode.\
Open [http://localhost:80](http://localhost:80) to view it in the browser.

## How To Run The Application With Docker

### Running In Development Mode

#### `docker build . -t hyperactive-clone-dev-image -f docker/dev/Dockerfile.dev`

This command runs in order to create a docker image from the root of the application.

#### `docker run -p 3000:3000 -it -v "$(pwd)/src:/app/src" --name hyperactive-clone-dev-container hyperactive-clone-dev-image`

This command runs in order to start the container on port 3000.

#### `docker stop hyperactive-clone-dev-container`

This command runs in order to stop the container from running.

### Running In Production Mode

#### `docker build . -t hyperactive-clone-prod-image -f docker/prod/Dockerfile.prod`

This command runs in order to create a docker image from the root of the application.

#### `docker run -p 80:80 -it --name hyperactive-clone-prod-container hyperactive-clone-prod-image`

This command runs in order to start the container on port 3000.

#### `docker stop hyperactive-clone-dev-container`

This command runs in order to stop the container from running.

## License

[MIT](https://choosealicense.com/licenses/mit/)
