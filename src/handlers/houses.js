// @flow
import _ from 'lodash';
import type { House } from '../types';

/* eslint-disable */
if (!global._babelPolyfill) {
  require('babel-polyfill');
}
/* eslint-enable */

const houses = ['Arryn', 'Frey', 'GreyJoy', 'Lannister', 'Stark', 'Targaryen'];
const kingdoms = [
  'Vale of Arryn',
  'The Riverlands',
  'Iron Islands',
  'Westerlands',
  'Winterfell',
  'Dragonstone'
];

const greatHouses = (): Array<House> =>
  _.zip(houses, kingdoms).map(pair => ({
    house: pair[0],
    kingdom: pair[1]
  }));

// $FlowIgnore
export const handler = (event, context, cb) => {
  const p = new Promise(resolve => {
    resolve(greatHouses());
  });
  p.then(res => cb(null, res)).catch(e => cb(e));
};
