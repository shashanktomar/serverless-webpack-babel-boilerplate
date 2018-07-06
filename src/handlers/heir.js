export const handler = (event, context, cb) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      heir: 'Jon Snow'
    })
  };
  cb(null, response);
};
