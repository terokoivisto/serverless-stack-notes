import handler from "./helpers/handler";
import dynamoDb from "./helpers/dynamodb";

export const main = handler(async (event, context) => {
    const params = {
        TableName: process.env.tableName,
        Key: {
            userId: event.requestContext.identity.cognitoIdentityId,
            noteId: event.pathParameters.id
        }
    };

    const res = await dynamoDb.get(params);
    if (!res.Item) {
        throw new Error(`Item not found with noteId ${params.Key.noteId}`);
    }

    return res.Item;
});
