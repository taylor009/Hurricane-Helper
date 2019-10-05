import { Inject } from 'typescript-ioc';
import { SecurityError } from '../model/securityError';
import { EnvConfigService } from './envConfigService';

const util = require('util');

/**
 * Implemented as own class to allow for dependency injection
 */
export class HttpService {
    private https: any;

    constructor(@Inject private config: EnvConfigService) {
        if (config.getStage() !== 'local') {
            const AWSXRay = require('aws-xray-sdk');
            this.https = AWSXRay.captureHTTPs(require('https'));
        } else {
            this.https = require('https');
        }
    }

    public get(hostname: string, path: string, headers?: any): Promise<string> {
        const params = {
            method: 'GET',
            port: 443,
            hostname,
            path,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        if (headers) {
            Object.assign(params.headers, headers);
        }

        return this.request(params);
    }

    public post(hostname: string, path: string, data: any, headers?: any): Promise<string> {
        const params = {
            method: 'POST',
            port: 443,
            hostname,
            path,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        if (headers) {
            Object.assign(params.headers, headers);
        }

        return this.request(params, data);
    }

    public delete(hostname: string, path: string, headers?: any): Promise<string> {
        const params = {
            method: 'DELETE',
            port: 443,
            hostname,
            path,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        if (headers) {
            Object.assign(params.headers, headers);
        }

        return this.request(params);
    }

    private request(options: any, data?: any): Promise<any> {
        return new Promise((resolve, reject) => {
            const req = this.https.request(options, (res) => {
                let body = '';

                res.setEncoding('utf8');
                res.on('data', (chunk) => {
                    body += chunk;
                });

                res.on('end', () => {
                    if (res.statusCode === 401) {
                        reject(new SecurityError(body));
                    } else if (res.statusCode < 200 || res.statusCode > 299) {
                        console.log('HTTP:' + res.statusCode);
                        console.log(body);
                        reject(new Error(`${res.statusCode}: ${res.statusMessage}`));
                    }
                    resolve(body);
                });
            });

            req.on('error', (e) => {
                console.log('problem with request: ' + e.message);
                reject(e);
            });

            if (data) {
                req.write(util.format('%j', data));
            }

            req.end();
        });
    }
}
