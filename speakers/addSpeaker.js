"use strict";
module.exports.add = (event, context, callback) => {
  const dynamodb = require("./dynamodb");

  const response = {
    statusCode: 200,
    body: JSON.stringify(assignments)
  };
  callback(null, response);
};
