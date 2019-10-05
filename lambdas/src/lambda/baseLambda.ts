import { Logger } from 'winston';

export abstract class BaseLambda {

    constructor(protected logger: Logger) {
        // Inject any dependencies on the constructor
    }

    protected handleBaseError(e, cb: (error: any, response: any) => void) {
        this.logger.error('handleBaseError:e', e);
        cb(e, e.message);
    }

    protected isNullOrWhiteSpace(str: string): boolean {
        return !str || str.length === 0 || str.trim().length === 0;
    }
}
