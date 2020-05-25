import handler from "./helpers/handler";
import dynamoDb from "./helpers/dynamodb";

export const main = handler(async (event, context) => {
    const data = JSON.parse(event.body);
    const params = {
        TableName: process.env.tableName,
        Key: {
            userId: event.requestContext.identity.cognitoIdentityId,
            noteId: event.pathParameters.id
        },
        UpdateExpression: "SET content = :content, attachment = :attachment",
        ExpressionAttributeValues: {
            ":content": data.content || null,
            ":attachment": data.attachment || null
        },
        ReturnValues: "ALL_NEW"
    };

    await dynamoDb.update(params);

    return {status: true};
});
