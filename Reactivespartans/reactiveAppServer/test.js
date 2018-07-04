var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var fs = require('fs-extra');
var request = require('request');
app.listen(9911);
app.use(bodyParser.json());
app.use(cors());

var request = require('request');

// request.get(
//     'http://localhost:9300/candidateInterviewDetails',
//     { json: { emailId: "sevak.singh@gmail.com" } },
//     function (error, response, body) {
//         if (!error && response.statusCode == 200) {
//             console.log(JSON.stringify(body));
//         } else {
//             console.log(error);
//         }
//     }
// );

// request.post(
//     'http://localhost:9300/fromCandidate',
//     { json: { emailId: "sevak.singh@gmail.com", msg : "Any specific document required on the day of interview?" } },
//     function (error, response, body) {
//         if (!error && response.statusCode == 200) {
//             console.log(JSON.stringify(body));
//         } else {
//             console.log(error);
//         }
//     }
// );

// request.get(
//     'http://localhost:9300/toCandidate',
//     { json: { emailId: "sevak.singh@gmail.com"} },
//     function (error, response, body) {
//         if (!error && response.statusCode == 200) {
//             console.log(JSON.stringify(body));
//         } else {
//             console.log(error);
//         }
//     }
// );

request.post(
    'http://localhost:9300/feedbackFromCandidate',
    { json: { emailId: "sevak.singh@gmail.com", msg: "Well sorted and organized recruitment process. Hoping to work with you asap."} },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(JSON.stringify(body));
        } else {
            console.log(error);
        }
    }
);