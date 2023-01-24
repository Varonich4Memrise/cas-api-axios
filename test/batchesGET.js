import { expect } from "chai";
var axios = require('axios');
require('dotenv').config();

describe("CAS with AXIOSS", () => {
 
  it('GET batches', async () => {
    var data = '';

    var config = {
      method: 'get',
      url: 'https://content-testing.m2r3.co/web-api/batches/?limit=26&offset=5',
      headers: { 
        'Cookie': process.env.COOKIE,
        //'Cookie': process.env.CFTOKEN,
        'Host': 'content-testing.m2r3.co'
      },
      data : data
    };
    
    return await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    
    });
});

  

//import * as dotenv from "dotenv";
//dotenv.config();
//const TOKEN = process.env.SESSION_COOKIE;
