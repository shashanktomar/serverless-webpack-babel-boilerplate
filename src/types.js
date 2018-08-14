// @flow

export interface LoggerI {
  debug(any): void;
  info(any): void;
  warn(any): void;
  error(any): void;
}

export type House = {
  +house: string,
  +kingdom: string
};
