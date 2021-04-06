const request = require('supertest');

const app = require('../app.js');
let chai = require('chai');

const existingReviewId = 25;
const Http200Reponse = 200;



describe('get /getreviewcomments', () => {
    it('expect 200 response getting comments for existing reviewId', (done) => {
        request(app).get('/getreviewcomments?reviewid=' + existingReviewId)
        .send({type:"reviews"})
        .then((res) =>{
            chai.assert.strictEqual(JSON.parse(res['statusCode']),Http200Reponse);
        }).then(done, done);
    })
});


describe('get /getreviewcomments', () => {
    it('expect 200 response, but empty text for non-existant reviewId', (done) => {
        request(app).get('/getreviewcomments?reviewid=' + -100)
        .then((res) =>{
            chai.assert.strictEqual(res['statusCode'],Http200Reponse);
            chai.assert.isEmpty(JSON.parse(res['text']));
        }).then(done, done);
    })
});
