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
        //initializing firebase app 
        firebaseApp
        //getting email and password from front end to relay to firebase
        auth.signInWithEmailAndPassword(req.query.email, req.query.password) // need to hash password between front end and backend, not secutred right now
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user; //getting user info from firebase (email)
            console.log('Authenticated')
            res.send(user)
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/user-not-found'){
                res.status(404).send('User Not Found')
                console.log('No User Has Been Found. Please sign up')
            }
            else{
            res.status(404).send('Error')
            console.log(errorCode)
            }

        });
  });


module.exports = router;