import handler from "../../../libs/handler-lib";
import dynamoDb from "../../../libs/dynamodb-lib";

export const main = handler(async (event, context) => {
    const data = JSON.parse(event.body);

    const params = {
        TableName: process.env.tableName,
        KeyConditionExpression: "userId = :userId",
        ExpressionAttributeValues: {
        ":userId": data.userId,
        },
    };

  const result = await dynamoDb.query(params);

  // Return the matching list of items in response body
  return result.Items;
});
