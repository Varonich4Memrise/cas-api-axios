import { expect } from "chai";
var axios = require('axios');

describe("CAS with AXIOSS", () => {
 
    it('GET snacks', async () => {

        var config = {
            method: 'get',
            url: 'https://content.m2r3.co/web-api/snacks/?limit=30&offset=0&has_scenarios=true',
            headers: { 
                //'Cookie': process.env.COOKIE,
                'Cookie': process.env.CFTOKEN,
            }
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });


    });
});

