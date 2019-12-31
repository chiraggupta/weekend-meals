const ordersPath = '/.netlify/functions/orders';

const create = async payload => {
  const response = await fetch(ordersPath, {
    method: 'POST',
    body: payload,
  });
  const data = await response.json();
  console.log(data);
  return data;
};

const getAll = async () => {
  console.log(ordersPath);
  const response = await fetch(ordersPath);
  const data = await response.json();
  console.log(data);
};

export default {
  create,
  getAll,
};
