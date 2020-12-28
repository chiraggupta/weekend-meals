const ordersPath = '/.netlify/functions/orders';

async function create(payload) {
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
}

async function getAll() {
  const response = await fetch(ordersPath);
  const data = await response.json();
  return data;
}

const ordersApi = { create, getAll };
export default ordersApi;
