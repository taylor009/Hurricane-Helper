import { Address } from './address';

export class User {
    public key: string;
    public firstName: string;
    public lastName: string;
    public language: 'ES' | 'EN';
    public address: Address;

    constructor() {
        this.address = new Address();
    }
}
