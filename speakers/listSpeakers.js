"use strict";
module.exports.list = (event, context, callback) => {
  const client = require("./dynamodb");

  const parms = {
    TableName: "dev-speakers"
  };

  client.scan(parms, (err, result) => {
    if (err) {
      console.error(err);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { "Content-Type": "text/plain" },
        body: "Couldn't fetch the speakers."
      });
      return;
    } else {
      const response = {
        statusCode: 200,
        body: JSON.stringify(result.Items)
      };
      callback(null, response);
    }
  });
};
