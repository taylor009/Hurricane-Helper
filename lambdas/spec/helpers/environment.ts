// tslint:disable: max-line-length

beforeEach(() => {
    process.env.AWS_XRAY_CONTEXT_MISSING = 'LOG_ERROR';                   // Dont throw error when no x-ray context
    process.env.LOG_LEVEL = 'fatal';                                      // error, warn, info, debug
    process.env.STAGE = 'local';
    process.env.REGION = 'us-east-1';
});
