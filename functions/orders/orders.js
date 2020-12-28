exports.handler = async function orders(event, context) {
  console.log(`Invoked with HTTP ${event.httpMethod}`);
  switch (event.httpMethod) {
    case 'GET':
      return require('./readAll').handler(event, context);
    case 'POST':
      return require('./create').handler(event, context);
    default:
      console.warn('Invalid request:', JSON.stringify(event));
      return {
        statusCode: 500,
        body: 'Unhandled HTTP Method, must be GET or POST',
      };
  }
};
