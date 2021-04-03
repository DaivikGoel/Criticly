const {expect} = require('chai');
const request = require('supertest');

const app = require('../app.js');
const { strictEqual } = require('assert');

const testUserId = 9;
const searchTypeUser = 'user';
const searchTypeLatest ='latest';
const Http200Reponse = 200;
const testUserShowId = 88396;
const testEpisodenumber = 1;
const testSeasonnumber = 1;

const sqlQueryResponseForTestUser = 
    
    [{
        "reviewid":25,
        "userid":9,
        "episodenumber":1,
        "seasonnumber":1,
        "showid":88396,
        "rating":5,
        "reviewtext":"NEW WORLD ORDER \n\n\n\n\nI LOVBE MARVEL\n\n\nWOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
        "created_instant":"2021-04-02T08:54:06.000Z",
        "modified_instant":"2021-04-02T08:54:06.000Z"
    }]

const sqlQueryResponseForTestUserLatest =
[
    {
      reviewid: 20,
      userid: 10,
      episodenumber: 1,
      seasonnumber: 1,
      showid: 88396,
      rating: 3,
      reviewtext: 'Wasn’t a fan',
      created_instant: '2021-03-31T02:30:35.000Z',
      modified_instant: '2021-03-31T02:30:35.000Z',
      username: 'Bojiizle',
      numberofLikes: 2,
      numberofComments: 1,
      hasUserLiked: 1
    }
  ]

const defaultSQLQueryResponse = 
  [
    {
      reviewid: 20,
      userid: 10,
      episodenumber: 1,
      seasonnumber: 1,
      showid: 88396,
      rating: 3,
      reviewtext: 'Wasn’t a fan',
      created_instant: '2021-03-31T02:30:35.000Z',
      modified_instant: '2021-03-31T02:30:35.000Z',
      username: 'Bojiizle',
      numberofLikes: 2,
      numberofComments: 1,
      hasUserLiked: 1
    },
    {
      reviewid: 25,
      userid: 9,
      episodenumber: 1,
      seasonnumber: 1,
      showid: 88396,
      rating: 5,
      reviewtext: 'NEW WORLD ORDER \n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'I LOVBE MARVEL\n' +
        '\n' +
        '\n' +
        'WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO',
      created_instant: '2021-04-02T08:54:06.000Z',
      modified_instant: '2021-04-02T08:54:06.000Z',
      username: 'Mallicious',
      numberofLikes: 0,
      numberofComments: 0,
      hasUserLiked: 0
    }
  ]
    


describe('GET /getreviews', () => {
    it('Get a list of reviews for by user', (done) => {
        request(app).get('/getreviews?userid=' + testUserId + '&type=' +searchTypeUser)
        .then((res) =>{
            strictEqual(res['statusCode'], Http200Reponse);
            let sqlResponse = JSON.parse(res['text']);
            console.log(sqlResponse)
            expect(sqlQueryResponseForTestUser).to.be.deep.equal(sqlResponse)
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
            strictEqual(res['statusCode'], Http200Reponse);
            let sqlResponse = JSON.parse(res['text']);
            console.log(sqlResponse)
            expect(sqlQueryResponseForTestUserLatest).to.be.deep.equal(sqlResponse)
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
            strictEqual(res['statusCode'], Http200Reponse);
            let sqlResponse = JSON.parse(res['text']);
            console.log(sqlResponse)
            expect(defaultSQLQueryResponse).to.be.deep.equal(sqlResponse)
        }).then(done, done);
    })
});


