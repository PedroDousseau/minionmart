import * as uuid from "uuid";
import handler from "../../../libs/handler-lib";
import dynamoDb from "../../../libs/dynamodb-lib";

export const main = handler(async (event, context) => {
  const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.tableName,
    Item: {
      // The attributes of the item to be created
      productId: uuid.v1(), // A unique uuid
      name: data.name, // Parsed from request body
      img: data.img, // Parsed from request body
      description: data.description, // Parsed from request body
      details: data.details, // Parsed from request body
      createdAt: Date.now(), // Current Unix timestamp
    },
  };

  await dynamoDb.put(params);

  return params.Item;
});
