// tslint:disable: max-line-length
import { Logger } from 'winston';
import { EnvConfigService } from '../services/envConfigService';
import { BaseLambda } from './baseLambda';
export abstract class ApiGatewayLambda extends BaseLambda {

    constructor(
        protected config: EnvConfigService,
        logger: Logger) {
        super(logger);
    }

    protected handleApiError(e, cb: (error: any, response: any) => void) {
        if (e.statusCode) {
            if (e.statusCode === 400 && e.data) {
                this.logger.error('handleApiError:400', { data: e.data});
                cb(null, this.response(e.statusCode, e.data));
            } else {
                this.logger.error('handleApiError:' + e.statusCode, { message: e.message});
                cb(null, this.response(e.statusCode, e.message));
            }
        } else {
            this.logger.error('handleApiError:e', e);
            const message = this.logger.level === 'debug' ? e.message : null;
            cb(null, this.response(500, message));
        }
    }

    protected ok(data?: any): any {
        return this.response(200, data);
    }

    private response(statusCode: number, data?: any): any {
        const response = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            isBase64Encoded: false,
            statusCode,
        } as any;
        if (data) {
            response.body = JSON.stringify(data);
        }

        this.logger.debug(`response:${statusCode}: `, response);
        return response;
    }
}
