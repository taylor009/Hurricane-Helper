export class EnvConfigService {
    public getLogLevel(): string {
        return process.env.LOG_LEVEL;
    }
    public getStage(): string {
        return process.env.STAGE;
    }
    public getRegion(): string {
        return process.env.REGION;
    }
    public getApiBaseUrl(): string {
        return process.env.API_BASE_URL;
    }
    public getTimeZone(): string {
        return process.env.TIME_ZONE;
    }
    public getDataTableName(): string {
        return process.env.DATA_TABLE;
    }
}
