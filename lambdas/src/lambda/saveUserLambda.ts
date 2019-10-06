import { APIGatewayEvent } from 'aws-lambda';
import { Inject } from 'typescript-ioc';
import { UserRepository } from '../repositories/userRepository';
import { EnvConfigService } from '../services/envConfigService';
import { LoggingService } from '../services/loggingService';
import { ApiGatewayLambda } from './apiGatewayLambda';

export class SaveUserLambda extends ApiGatewayLambda {

    constructor(
        @Inject private repo: UserRepository,
        @Inject config: EnvConfigService,
        @Inject loggingService: LoggingService) {
        super(config, loggingService.getLogger('SaveUserLambda'));

    }

    public async handler(event: APIGatewayEvent, cb) {
        try {
            this.logger.debug('Received Event: ', event);
            const user = JSON.parse(event.body);

            const model = await this.repo.put(user);

            cb(null, this.ok({ status: 'ok' }));
        } catch (e) {
            this.handleApiError(e, cb);
        }
    }
}
