var axios = require('axios');
var FormData = require('form-data');
var data = new FormData();

describe("CAS with AXIOSS", () => {
 
    it('GET labels', async () => {
        var config = {
            method: 'get',
            url: 'https://content-testing.m2r3.co/web-api/labels',
            headers: { 
              'Cookie': process.env.COOKIE,
              //'Cookie': process.env.CFTOKEN,
              'Host': 'content-testing.m2r3.co', 
              ...data.getHeaders()
            },
            data : data
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

