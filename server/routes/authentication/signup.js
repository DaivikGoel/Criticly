//creates new user in firebase
var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var firebase = require('firebase');
const firebaseApp = require('../../environment/firebaseconfig')



const auth = firebase.auth();

/* GET users listing. */
router.get('/', function(req, res, next) {
        firebaseApp
        auth.createUserWithEmailAndPassword(req.query.email, req.query.password) //sends email and password to firebase to be created. Need to add hashing between this and front end
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log('Authenticated')
            res.send(user)
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            console.log(errorCode)
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
                res.status(404).send('That email address is already in use!')
            }

            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
                res.status(404).send('That email address is invalid!')
            }

            console.error(error);
        });
  });


module.exports = router;