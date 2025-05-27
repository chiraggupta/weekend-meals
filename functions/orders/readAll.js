const { db } = require('./setupFirestore');

exports.handler = async function readAll(event, context) {
  try {
    const collection = db.collection('orders').orderBy('date', 'desc');
    const ordersResponse = await collection.get();
    const data = ordersResponse.map((order) => order.data());
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error('Error (readAll):', error);
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
