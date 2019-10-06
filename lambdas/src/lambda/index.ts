import { Container } from 'typescript-ioc';
import { EnvConfigService } from '../services/envConfigService';
import { LoggingService } from '../services/loggingService';
import { DataApiLambda } from './dataApiLambda';
import { SaveUserLambda } from './saveUserLambda';
import { GetDirectoryLambda } from './getDiretoryLambda';

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

export const dataApiLambda = async (event, context, cb) => {
    const lambda: DataApiLambda = Container.get(DataApiLambda);
    return await lambda.handler(event, cb);
};

/**
 * Provides access to the FR Data API
 */
export const saveUserLambda = async (event, context, cb) => {
    const lambda: SaveUserLambda = Container.get(SaveUserLambda);
    return await lambda.handler(event, cb);
};

export const getDirectoryLambda = async (event, context, cb) => {
    const lambda: GetDirectoryLambda = Container.get(GetDirectoryLambda);
    return await lambda.handler(event, cb);
};
