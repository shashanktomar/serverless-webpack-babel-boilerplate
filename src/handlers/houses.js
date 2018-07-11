// @flow
import _ from 'lodash';
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
  const result = _.zip(houses, kingdoms).map(pair => ({
    house: pair[0],
    kingdom: pair[1]
  }));
  return result;
};

// $FlowIgnore
export const handler = async () => {
  const result = await greatHouses();
  return {
    statusCode: 200,
    body: {
      houses: result
    }
  };
};
