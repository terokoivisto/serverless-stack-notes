import * as uuid from 'uuid';
import handler from './helpers/handler';
import dynamoDb from './helpers/dynamodb';
import * as moment from 'moment';


export const main = handler(async (event, context) => {
    const data = JSON.parse(event.body);

    const params = {
        TableName: process.env.tableName,
        Item: {
            userId: event.requestContext.identity.cognitoIdentityId,
            noteId: uuid.v1(),
            content: data.content,
            attachment: data.attachment,
            createdAt: moment().toISOString()
        }
    };

    await dynamoDb.put(params);
    return params.Item;
});
