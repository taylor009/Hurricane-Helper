export class SecurityError extends Error {
    public statusCode: number;

    constructor(public message: string) {
        super(message);
        this.statusCode = 403;
    }
}
