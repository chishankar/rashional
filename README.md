### Rashional
==========================================================

Access to Care is a challenge at this years Hackathon with an aim to nulify social and regional determinants from impacting ones health. Our mobile/desktop app, Rashional, tackles this problem by using a Machine Learning Algorithim to identify different skin rashes, the severity, and utilizes a Free Clinic API to provide the user with a list of the nearest free healthcare clinics available to them. The app helps to provide initial insight and direction to a medical problem, in a field in which there is not a readily available solution that is accessible through the internet and works via a single picture upload.

The app is also available in both English and Spanish so it can be accommodate a larger user base and provide Access to Care to a larger growing population of native English and Spanish speakers.

TL;DR: This is an application that uses Machine Learning to identify if a rash might be a symptom of one of several serious diseases and directs you to the nearest free clinic to get the rash treated at.

## Development
The following shows how to get started with developing on this app

1. Clone repository

  ```
  $ git clone
  ```

2. Install dependencies

  ```
  $ npm install
  ```

3. Compile project

  ```
  $ npm run build-all
  ```

  This will build both the front-end and back-end components. 
  

4. Start static fileserver
  ```
  npm start
  ```
  
  This command requires you to run 'npm run build-all' first. If you would prefer to not, you can also use 'npm run babel-node
  

5. Development
  ```
  npm run watch
  ```

This will enable Watchify, which will watch for any changes made in ./client and will bundle the files automatically to ./public/bundle.js

And you're up and going. The server will be locally hosted at http://localhost:5000/

[Check out the Api documentation](https://hackily.github.io/rashional/apidoc/index.html)

Use the following command to regenerate documentation.
>npm run docs
