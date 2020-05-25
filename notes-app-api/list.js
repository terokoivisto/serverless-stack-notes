import handler from "./helpers/handler";
import dynamoDb from "./helpers/dynamodb";

export const main = handler(async (event, context) => {
    const params = {
        TableName: process.env.tableName,
        KeyConditionExpression: 'userId = :userId',
        ExpressionAttributeValues: {
            ':userId': event.requestContext.identity.cognitoIdentityId
        }
    };

    const res = await dynamoDb.query(params);

    return res.Items;
});
