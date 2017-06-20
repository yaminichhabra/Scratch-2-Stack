'use strict';

var express = require('express');
var port = process.env.PORT || "8080";

// Initiate express app
var app = express();

app.listen(port, function(){
    console.log('server running on port ' + port);

}) 