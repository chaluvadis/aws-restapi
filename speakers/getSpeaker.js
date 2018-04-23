"use strict";
module.exports.get = (event, context, callback) => {
    var faker = require("faker");
    var _ = require("lodash");
    var assignments = _.times(10, n => {
      return {
        id: faker.random.number(1000, 2000),
        clientname: faker.name.jobTitle(),
        assignmentguid: faker.random.uuid(),
        questassignmentid:
          faker.random.number(100000, 999999).toString() +
          "-" +
          faker.random.number(1000, 9999).toString(),
        isActive: true,
        createdDate: faker.date.recent()
      };
    });
    const response = {
      statusCode: 200,
      body: JSON.stringify(assignments)
    };
    callback(null, response);
  };
  