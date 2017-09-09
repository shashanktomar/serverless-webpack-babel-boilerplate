/* eslint-disable */
if (!global._babelPolyfill) {
  require('babel-polyfill');
}
/* eslint-enable */

export const handler = (event, context, cb) => {
  cb(null, 'Jon Snow');
};
