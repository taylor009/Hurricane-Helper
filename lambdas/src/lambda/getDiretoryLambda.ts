import { APIGatewayEvent } from 'aws-lambda';
import { Inject } from 'typescript-ioc';
import { EnvConfigService } from '../services/envConfigService';
import { LoggingService } from '../services/loggingService';
import { ApiGatewayLambda } from './apiGatewayLambda';

export class GetDirectoryLambda extends ApiGatewayLambda {

    constructor(
        @Inject config: EnvConfigService,
        @Inject loggingService: LoggingService) {
        super(config, loggingService.getLogger('GetDirectoryLambda'));

    }

    public async handler(event: APIGatewayEvent, cb) {
        const data = [{
            "orgName": "Cross Catholic Outreach",
            "address": "2700 N Military Trl #240",
            "city": "Boca Raton",
            "state": "FL",
            "type": "charity" 
        },
        {
            "orgName": "Boca Helping Hands",
            "address": "1500 NW 1st Ct",
            "city": "Boca Raton",
            "state": "FL",
            "type": "charity"
        },
        {
            "orgName": "Community Charity Advancement",
            "address": "4699 N Federal Hwy",
            "city": "Boca Raton",
            "state": "FL",
            "type": "charity"
        },
        {
            "orgName": "Boca Helping Hands",
            "address": "1500 NW 1st Ct",
            "city": "Boca Raton",
            "state": "FL",
            "type": "charity"
        },
        {
            "orgName": "American Red Cross",
            "address": "600 NE 3rd Ave",
            "city": "Fort Lauderdale",
            "state": "FL",
            "type": "charity"
        },
        {
            "orgName": "Itasca Construction",
            "address": "6420 Congress Ave #1900",
            "city": "Boca Raton",
            "state": "FL",
            "type": "contractor"
        },
        {
            "orgName": "NAD Specialty Contractors",
            "address": "1120 Holland Dr. #20",
            "city": "Boca Raton",
            "state": "FL",
            "type": "contractor"
        },
        {
            "orgName": "GGL & SONS CONSTRUCTION, General Contractor",
            "address": "2288 NW 36th St",
            "city": "Boca Raton",
            "state": "FL",
            "type": "contractor"
        },
        {
            "orgName": "Villa's Construction and Remodeling Inc",
            "address": "1121 Holland Dr",
            "city": "Boca Raton",
            "state": "FL",
            "type": "contractor"
        }];

        try {
            this.logger.debug('Received Event: ', event);
            const directory = data;

            cb(null, this.ok({ status: 'ok', data: directory }));
        } catch (e) {
            this.handleApiError(e, cb);
        }
    }
}
