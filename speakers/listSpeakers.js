"use strict";
module.exports.list = (event, context, callback) => {
  var faker = require("faker");
  var _ = require("lodash");
  var speakers = _.times(100, n => {
    var firstName = faker.name.firstName(),
      lastName = faker.name.lastName(),
      suffix = faker.name.suffix();

    return {
      id: faker.random.number(1000, 2000),
      firstName: firstName,
      lastName: lastName,
      suffix: suffix,
      fullName: suffix + ". " + firstName + " " + lastName,
      email: lastName + "." + firstName + "@speakers.com",
      expertsIn: [
        faker.random.arrayElement(["JavaScript", "TypeScript", "CoffeeScript"]),
        faker.random.arrayElement(["Web Application", "Mobile Applications", "Single Page Application"]),
        faker.random.arrayElement(["c#", "Asp.Net", "Asp.Net Core"]),
      ],
      city: faker.address.city(),
      state: faker.address.state(),
      profile: faker.image.imageUrl()
    };
  });
  const response = {
    statusCode: 200,
    body: JSON.stringify(speakers)
  };
  callback(null, response);
};
