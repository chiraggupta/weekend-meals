const ordersPath = '/.netlify/functions/orders';

const create = async payload => {
  const response = await fetch(ordersPath, {
    method: 'POST',
    body: payload,
  });
  const data = await response.json();
  return data;
};

const getAll = async () => {
  const response = await fetch(ordersPath);
  const data = await response.json();
  return data;
};

export default {
  create,
  getAll,
};
