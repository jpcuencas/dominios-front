import { createLogger, format, transports } from 'winston';

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.simple(), 
        format.timestamp(), 
        format.printf(info => `[${info.timestamp}] ${info.level} ${info.message}` )
        ),
    transports: [
        new transports.Console({
            level: 'debug',
        }),
        /**
        new transports.File({
            level: 'debug',
            maxsize: 5120000,
            maxFiles: 5,
            filename: `${__dirname}/../logs/log-app.log`,
        }),
        /***/ 
    ]
});
// cambiar si se prefiere usar la consola del navegador
export default logger//console;