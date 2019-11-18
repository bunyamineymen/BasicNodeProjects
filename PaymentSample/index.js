// const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });



var express = require('Express');
var app = express();

var trigger = require('./trigger.js');

app.use('/payment', trigger);

app.listen(3000);