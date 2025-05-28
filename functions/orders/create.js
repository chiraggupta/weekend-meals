const { db } = require('./setupFirestore');

exports.handler = async function create(event, context) {
  try {
    const data = JSON.parse(event.body);

    const newOrder = db.collection('orders').doc();
    const response = await newOrder.set({ data });
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
