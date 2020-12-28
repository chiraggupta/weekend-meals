const ordersPath = '/.netlify/functions/orders';

const create = async (payload) => {
  try {
    const response = await fetch(ordersPath, {
      method: 'POST',
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

const getAll = async () => {
  const response = await fetch(ordersPath);
  const data = await response.json();
  return data;
};

const ordersApi = { create, getAll };
export default ordersApi;
