import HttpLogger from 'pino-http';
import Logger from 'pino';

export const rootLogger =
  Logger({
    transport: { target: 'pino-pretty' },
    level: 'debug',
  })

export const httpLogger = HttpLogger({
  logger: rootLogger
});
