// @flow
import R from 'ramda';
import Logger from '../logger';
import type { House } from '../types';

const houses = ['Arryn', 'Frey', 'GreyJoy', 'Lannister', 'Stark', 'Targaryen'];
const kingdoms = [
  'Vale of Arryn',
  'The Riverlands',
  'Iron Islands',
  'Westerlands',
  'Winterfell',
  'Dragonstone'
];

const greatHouses = async (): Promise<Array<House>> => {
  // $FlowIgnore
  const result = R.zip(houses, kingdoms).map(pair => ({
    house: pair[0],
    kingdom: pair[1]
  }));
  return result;
};

// $FlowIgnore
export const handler = async (event, context) => {
  const logger = new Logger(context.awsRequestId);
  const result = await greatHouses();
  logger.info({ request: 'houses', result });
  return {
    statusCode: 200,
    body: JSON.stringify({
      houses: result
    })
  };
};
