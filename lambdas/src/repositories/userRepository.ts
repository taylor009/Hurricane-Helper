import { DynamoDB } from 'aws-sdk';
import { Inject } from 'typescript-ioc';
import { Logger } from 'winston';
import { User } from '../model/user';
import { EnvConfigService } from '../services/envConfigService';
import { LoggingService } from '../services/loggingService';

export class UserRepository {

    private tableName: string;
    private logger: Logger;

    constructor(
        @Inject private dynamoDb: DynamoDB.DocumentClient,
        @Inject config: EnvConfigService,
        @Inject logging: LoggingService) {

        this.logger = logging.getLogger('UserRepository');
        this.tableName = config.getDataTableName();
    }

    public async getOne(phoneNumber: string): Promise<User> {
        const params = {
            TableName: this.tableName,
            Key: {
                key: phoneNumber,
            },
        };
        const result = await this.dynamoDb.get(params).promise();
        this.logger.debug('getOne:model', result);
        return result.Item as User;
    }

    public async put(model: User) {
        const params = {
            TableName: this.tableName,
            Item: model,
        };
        const result = await this.dynamoDb.put(params).promise();
        return params.Item;
    }
}
