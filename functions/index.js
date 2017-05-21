const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);
exports.addMessage = functions.https.onRequest((req, res) => {
    const username = req.query.username;
    admin.database().ref('/new-follower').push({ username: username }).then(snapshot => {
        var message = `${username} created`
        res.status(201).send( message );
    });
});