"use strict";
const AWS = require("aws-sdk");
let options = {
  region: "us-east-2"
};
const client = new AWS.DynamoDB.DocumentClient(options);
module.exports = client;
