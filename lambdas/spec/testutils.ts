
import { readFileSync } from 'fs';
import { IConnectCtr } from '../src/model/iConnectCtr';

export class TestUtils {
    public static getTestData<TModel>(filename: string): TModel {
        const json = readFileSync('spec/data/' + filename, 'utf8');
        const event: TModel = JSON.parse(json);
        return event;
    }

    // tslint:disable-next-line: max-line-length
    public static createCtr(parameters: {[name: string]: string}, attributes: {[name: string]: string}): IConnectCtr<any> {
        return {
            Details: {
                ContactData: {
                    ContactId: 'fake-contact-id',
                    CustomerEndpoint: {
                        Address: 'fake-phone',
                        Type: 'VOICE',
                    },
                    Attributes: attributes,
                },
                Parameters: parameters,
            },
        } as any;
    }
}

export function asyncString(data: string) {
    return new Promise((resolve, reject) => {
        resolve(data);
    });
}

export function asyncData<T>(data: T): Promise<T> {
    return new Promise((resolve, reject) => {
        resolve(data);
    });
}

export function asyncError(errorObject: any) {
    return new Promise((resolve, reject) => {
        reject(errorObject);
    });
}
