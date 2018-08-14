// @flow
import pino from 'pino';
import pkg from '../package.json';
import type { LoggerI } from './types';

const { version } = pkg;

export default class Logger implements LoggerI {
  requestId: string;

  pino: any;

  constructor(requestId: string) {
    this.requestId = requestId;
    this.pino = pino({
      level: process.env.LOG_LEVEL || 'debug'
    });
  }

  debug(obj: any): void {
    this.pino.debug({
      version,
      requestId: this.requestId,
      ...obj
    });
  }

  info(obj: any): void {
    this.pino.info({
      version,
      requestId: this.requestId,
      ...obj
    });
  }

  warn(obj: any): void {
    this.pino.warn({
      version,
      requestId: this.requestId,
      ...obj
    });
  }

  error(obj: any): void {
    this.pino.error({
      version,
      requestId: this.requestId,
      ...obj
    });
  }
}
