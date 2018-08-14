import Logger from '../logger';

export const handler = (event, context, cb) => {
  const logger = new Logger(context.awsRequestId);
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      heir: 'Jon Snow'
    })
  };
  logger.info({ request: 'heir', result: 'Jon Snow' });
  cb(null, response);
};
