import { DynamoDB } from 'aws-sdk';
import { DataApiLambda } from '../../src/lambda/dataApiLambda';
import { UserRepository } from '../../src/repositories/userRepository';
import { EnvConfigService } from '../../src/services/envConfigService';
import { LoggingService } from '../../src/services/loggingService';
import { TestUtils } from '../testutils';

describe('DataApiLambda', () => {

    let sut: DataApiLambda;

    beforeEach(() => {
        const config = new EnvConfigService();
        const loggingSvc = new LoggingService(config);
        const repo = new UserRepository(new DynamoDB.DocumentClient(), config, loggingSvc);
        sut = new DataApiLambda(repo, loggingSvc);
    });

    it('should return FOUND=false when user not found', async () => {
        // arrange
        const req = TestUtils.createCtr({}, {});
        req.Details.ContactData.CustomerEndpoint.Address = '+12223334444';

        // act
        await sut.handler(req, (err, data) => {
            // assert
            expect(err).toBeFalsy();
            expect(data.FOUND).toBe('false');
        });
    });

    it('should return FOUND=true & user detail when user is found', async () => {
        // arrange
        const req = TestUtils.createCtr({}, {});
        req.Details.ContactData.CustomerEndpoint.Address = '+13055102484';

        // act
        await sut.handler(req, (err, data) => {
            // assert
            expect(err).toBeFalsy();
            expect(data.FOUND).toBe('true');
            expect(data.FIRST_NAME).toBeTruthy();
            expect(data.LAST_NAME).toBeTruthy();
        });
    });

});
