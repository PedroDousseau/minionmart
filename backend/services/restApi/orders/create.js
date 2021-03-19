import handler from "../../../libs/handler-lib";
import * as uuid from "uuid";
import dynamoDb from "../../../libs/dynamodb-lib";

export const main = handler(async (event, context) => {
  //const data = JSON.parse(event.body);
  const data = event;

  const params = {
    TableName: process.env.orderTable,
    Item: {
      orderId: uuid.v1(),
      userId: data.userId, // Parsed from request body
      items: data.items, // Parsed from request body
      createdAt: Date.now(),
    },
  };

  return dynamoDb.put(params)
  .then(() => {
    return {
      emails: [data.userId, "pedro32santos@hotmail.com"],
      order: data.items
    };
  })
  .catch((err) => {
    return err.message;
  });
});
