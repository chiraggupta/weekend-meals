const { q, client } = require('./setupFaunaDB');

const CLASS_NAME = 'classes/orders';

exports.handler = async (event, context) => {
  try {
    const data = JSON.parse(event.body);
    const response = await client.query(q.Create(q.Ref(CLASS_NAME), { data }));
    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
    console.error('Error (create):', error);
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
