const { q, client } = require('./setupFaunaDB');

const INDEX_NAME = 'indexes/orders_sorted_by_when';
// Data format: [[sortedDate, Ref(Collection(orders: {what, who, when}))]]

exports.handler = async (event, context) => {
  try {
    const refsResponse = await client.query(
      q.Paginate(q.Match(q.Ref(INDEX_NAME))),
    );
    const refs = refsResponse.data;

    const dataFromRefsQuery = refs.map(([_, ref]) => q.Get(ref));
    const response = await client.query(dataFromRefsQuery);

    const data = response.map((order) => order.data);
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
