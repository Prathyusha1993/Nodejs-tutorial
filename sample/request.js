var request = require('request');

request("http://www.google.com", function(error, res,body){
    console.log(body);
})

// We are making a GET Request to www.google.com and subsequently calling a function when a response is received. When a response is received the parameters(error, response, and body) will have the following values
// Error – In case there is any error received when using the GET request, it will be recorded here.
// Response- The response will have the http headers which are sent back in the response.
// Body- The body will contain the entire content of the response sent by Google.