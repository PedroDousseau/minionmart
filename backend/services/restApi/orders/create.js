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

    const emailAdmin = "pedro32santos@hotmail.com";
    const emails = [data.userId];

    if(data.userId !== emailAdmin)
      emails.push(emailAdmin);

    return {
      emails: emails,
      order: params.Item
    };
  })
  .catch((err) => {
    return err.message;
  });
});
