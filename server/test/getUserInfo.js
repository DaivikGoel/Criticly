const request = require('supertest');

const app = require('../app.js');
let chai = require('chai');

const exsistingUserId = 9;
const Http200Reponse = 200;



describe('get /getuserinfo', () => {
    it('expect 200 response when getting user info for userid 9', (done) => {
        request(app).get('/getuserinfo?userid=' + exsistingUserId)
        .send({userid:exsistingUserId})
        .then((res) =>{
            chai.assert.strictEqual(JSON.parse(res['statusCode']),Http200Reponse);
        }).then(done, done);
    })
});


describe('get /getuserinfo', () => {
    it('expect 200 response, but empty text for non-existant user', (done) => {
        request(app).get('/getuserinfo?userid=' + -100)
        .send({userid:exsistingUserId})
        .then((res) =>{
            chai.assert.strictEqual(res['statusCode'],Http200Reponse);
            chai.assert.isEmpty(JSON.parse(res['text']));
        }).then(done, done);
    })
});
