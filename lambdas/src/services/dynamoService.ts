import { DynamoDB } from 'aws-sdk';
import { DeleteItemOutput, Key, PutItemOutput } from 'aws-sdk/clients/dynamodb';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

/**
 * Utility for accessing S3 objects
 * Changes style from callbacks to promises for clarity
 * Add more functions as needed, try to follow this style
 */
export class DynamoService {
    private dynamoDb: DynamoDB.DocumentClient;

    constructor() {
        this.dynamoDb = new DocumentClient();
    }

    public async batchGet(table: string, keys: Key[]): Promise<any[]> {
        const params = {
            RequestItems: {
                [table]: {
                    Keys: keys,
                },
            },
        };

        const result = await this.dynamoDb.batchGet(params).promise();
        return result.Responses[table];
    }

    public async get(table: string, key: any): Promise<any> {
        const params = {
            TableName: table,
            Key: key,
        };

        const result = await this.dynamoDb.get(params).promise();
        return result.Item;
    }

    public put(table: string, data: any): Promise<PutItemOutput> {
        const params = {
            Item: data,
            TableName: table,
        };

        return this.dynamoDb.put(params).promise();
    }

    public delete(table: string, key: string): Promise<DeleteItemOutput> {
        const params = {
            Key: {
                path: key,
            },
            TableName: table,
        };

        return this.dynamoDb.delete(params).promise();
    }
}
