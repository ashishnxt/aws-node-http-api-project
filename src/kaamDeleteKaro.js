"use strict";
const AWS = require("aws-sdk");

const kaamDeleteKaro = async (event) => {

  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  const { id } = event.pathParameters;

  try {
    await dynamoDb.delete({
      TableName: "KaamKaro",
      Key: { id }
    }).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({ msg: "Kaam Delete Kar Diya" }),
    };

  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      body: JSON.stringify({ msg: "Error deleting kaam" }),
    };
  }
};

module.exports = {
  handler: kaamDeleteKaro,
};
