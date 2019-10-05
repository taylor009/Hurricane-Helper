import { Container } from 'typescript-ioc';
import { EnvConfigService } from '../services/envConfigService';
import { LoggingService } from '../services/loggingService';
import { DataApiLambda } from './dataApiLambda';

const AWSXRay = require('aws-xray-sdk');
const AWS = AWSXRay.captureAWS(require('aws-sdk'));

export const integrationTest = async (event, context, cb) => {
    // Make sure we can get all 
    try {
        const config = Container.get(EnvConfigService);
        const loggingSvc = Container.get(LoggingService);
    } catch (error) {
        cb(error, error.message);
    }

};

/**
 * Provides access to the FR Data API
 */
export const dataApiLambda = async (event, context, cb) => {
    const lambda: DataApiLambda = Container.get(DataApiLambda);
    return await lambda.handler(event, cb);
};
