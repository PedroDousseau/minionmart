import handler from "../../../libs/handler-lib";
import dynamoDb from "../../../libs/dynamodb-lib";

export const main = handler(async (event, context) => {

    const params = {
        TableName: process.env.orderTable,
        KeyConditionExpression: "userId = :userId",
        ExpressionAttributeValues: {
        ":userId": event.pathParameters.userId, // Parsed from path parameters
        },
    };

  const result = await dynamoDb.query(params);

  // Return the matching list of items in response body
  return result.Items;
});
