const { db } = require('./setupFirestore');

exports.handler = async function readAll(event, context) {
  try {
    const collection = db.collection('orders').orderBy('date', 'desc');
    const ordersObject = await collection.get();

    const ordersList = [];
    ordersObject.forEach((orderObject) => {
      ordersList.push(orderObject.data());
    });

    return {
      statusCode: 200,
      body: JSON.stringify(ordersList),
    };
  } catch (error) {
    console.error('Error (readAll):', error);
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
