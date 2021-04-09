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
        auth.signInWithEmailAndPassword(req.query.email, req.query.password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log('Authenticated')
            res.send(user)
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            res.status(404).send('Error')
            console.log(errorCode)
            if (errorCode == 'auth/user-not-found'){
                res.status(404).send('User Not Found')
                console.log('No User Has Been Found. Please sign up')
            }
        });
  });


module.exports = router;