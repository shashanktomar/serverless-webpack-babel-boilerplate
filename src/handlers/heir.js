/* eslint-disable */
if (!global._babelPolyfill) {
  require('babel-polyfill');
}
/* eslint-enable */

export const handler = (event, context, cb) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      heir: 'Jon Snow'
    })
  };
  cb(null, response);
};
