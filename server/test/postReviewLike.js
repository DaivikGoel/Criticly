let chai = require('chai');
const request = require('supertest');


const app = require('../app.js');


const exsistingUserId = 9;
const existingReviewId = 8889013;
const Http404Reponse = 404;



describe('POST /reviewlike', () => {
    it('expect 404 response when trying to insert existing record', (done) => {
        request(app).post('/getreviews')
        .send({type:'add',reviewid: exsistingUserId, existingReviewId: existingReviewId})
        .then((res) =>{
            chai.assert.strictEqual(res['statusCode'], Http404Reponse);
        }).then(done, done);
    })
});