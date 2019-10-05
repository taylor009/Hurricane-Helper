import { Inject } from 'typescript-ioc';
import { IConnectCtr } from '../model/iConnectCtr';
import { LoggingService } from '../services/loggingService';
import { BaseLambda } from './baseLambda';

export class DataApiLambda extends BaseLambda {
    constructor(@Inject logging: LoggingService) {
        super(logging.getLogger('DataApiLambda'));
    }

    public async handler(event: IConnectCtr<{[name: string]: string}>, cb) {
        try {
            this.logger.debug('Received Event: ', event);

            const resp = {
                FOUND: 'true',
                FIRST_NAME: 'Retired',
                LAST_NAME: 'Grandma',
                HAS_PROMPT: 'true',
                LANGUAGE: 'EN',
                ADDRESS: '6600 N Military TrlBoca Raton, FL 33487',
                // tslint:disable-next-line: max-line-length
                PROMPT: 'Hurricane Dorian is approaching your area. A mandatory evacuation is effective tomorrow at 2pm.',
            };

            cb(null, resp);
        } catch (e) {
            this.logger.error('Unhandled error.', e);
            cb(e, e.message);
        }

    }
}