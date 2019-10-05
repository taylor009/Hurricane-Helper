import { Format } from 'logform';
import { Inject } from 'typescript-ioc';
import { createLogger, format, Logger, transports } from 'winston';
import { EnvConfigService } from './envConfigService';

/**
 * Central service to control logging
 */
class LoggingService {

    constructor(
        @Inject private config: EnvConfigService) { }

    public getLogger(source: string): Logger {
        const cfg = {
            level: this.config.getLogLevel(),
            format: format.json(),
            transports: [],
        };

        const logger = createLogger(cfg);

        const formatter = (this.config.getStage() !== 'local')
            ? this.localFormatter(source)
            : this.awsFormatter(source);

        logger.add(new transports.Console({
            format: formatter,
        }));

        return logger;
    }

    /**
     * Prepends the log source
     */
    private awsFormatter(source: string): Format {
        const appender = format((info) => {
            if (source) {
                info.message = `${source}:${info.message}`;
            }
            return info;
        });

        return format.combine(
            format.splat(),
            appender(),
            format.simple(),
        );
    }

    /**
     * Adds console colorization
     */
    private localFormatter(source: string): Format {
        return format.combine(
            format.colorize(),
            this.awsFormatter(source),
        );
    }
}

export { LoggingService };
