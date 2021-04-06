let chai = require('chai');

const request = require('supertest');

const app = require('../app.js');
const testUserId = 9;
const searchTypeUser = 'user';
const searchTypeLatest ='latest';
const Http200Reponse = 200;
const testUserShowId = 88396;
const testEpisodenumber = 1;
const testSeasonnumber = 1;



describe('GET /getreviews', () => {
    it('Get a list of reviews for by user', (done) => {
        request(app).get('/getreviews?userid=' + testUserId + '&type=' +searchTypeUser)
        .then((res) =>{
          chai.assert.strictEqual(res['statusCode'], Http200Reponse);
        }).then(done, done);
    })
});

describe('GET /getreviews', () => {
    it('Get a list of reviews for a show, sorted by latest', (done) => {
        request(app).get('/getreviews?episodenumber=' + testEpisodenumber + 
                            '&seasonnumber=' +testSeasonnumber +
                            '&showid=' + testUserShowId +
                            '&userid=' + testUserId +
                            '&type=' + searchTypeLatest)
        .then((res) =>{
          chai.assert.strictEqual(res['statusCode'], Http200Reponse);
        }).then(done, done);
    })
});

describe('GET /getreviews', () => {
    it('Get a list of reviews without specifying users or latest', (done) => {
        request(app).get('/getreviews?episodenumber=' + testEpisodenumber + 
                            '&seasonnumber=' +testSeasonnumber +
                            '&showid=' + testUserShowId +
                            '&userid=' + testUserId)
        .then((res) =>{
          chai.assert.strictEqual(res['statusCode'], Http200Reponse);
        }).then(done, done);
    })
});


