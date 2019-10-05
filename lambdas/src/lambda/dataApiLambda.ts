import { Inject } from 'typescript-ioc';
import { Address } from '../model/address';
import { IConnectCtr } from '../model/iConnectCtr';
import { UserRepository } from '../repositories/userRepository';
import { LoggingService } from '../services/loggingService';
import { BaseLambda } from './baseLambda';

export class DataApiLambda extends BaseLambda {
    constructor(
        @Inject private repo: UserRepository,
        @Inject logging: LoggingService) {
        super(logging.getLogger('DataApiLambda'));
    }

    public async handler(event: IConnectCtr<{ [name: string]: string }>, cb) {
        try {
            this.logger.debug('Received Event: ', event);

            const user = await this.repo.getOne(event.Details.ContactData.CustomerEndpoint.Address);

            const resp: any = {
                FOUND: 'false',
            };

            if (user) {
                resp.FOUND = 'true';
                resp.FIRST_NAME = user.firstName;
                resp.LAST_NAME = user.lastName;
                resp.LANGUAGE = user.language;
                resp.ADDRESS = this.formatAddress(user.address);

                // TODO: Lookup emergency status
                if(true){
                    resp.HAS_PROMPT = 'true';
                    // tslint:disable-next-line: max-line-length
                    resp.PROMPT = `Your address on ${user.address.line1} has recently been cleared of Hurricane warning status.`;
                }
            }

            this.logger.debug('result: ', resp);
            cb(null, resp);
        } catch (e) {
            this.logger.error('Unhandled error.', e);
            cb(e, e.message);
        }
    }

    private formatAddress(addr: Address): string {
        let result = addr.line1;
        if (addr.line2) {
            result += ', ' + addr.line2;
        }

        result += ', ' + addr.city;
        result += ', ' + addr.state;
        result += ' ' + addr.zip;

        return result;
    }
}