const {expect, should} = require('chai');
const request = require('supertest');
var assert = require('assert');

const app = require('../app.js');
const { strictEqual } = require('assert');

const exsistingUserId = 88890134;
const existingReviewId = 8889013;
const Http404Reponse = 404;

describe('POST /reviewlike', () => {
    it('expect 404 response when trying to insert existing record', (done) => {
        request(app).post('/postreviewlike')
        .send({type:'add',reviewid: exsistingUserId, existingReviewId: existingReviewId})
        .then((res) =>{
            strictEqual(res['statusCode'], Http404Reponse);
        }).then(done, done);
    })
});
