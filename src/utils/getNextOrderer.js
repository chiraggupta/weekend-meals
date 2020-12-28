const ROTA = ['Anya', 'Babina', 'Yoshi', 'Chirag'];

const getNextOrderer = (orders) => {
  if (!orders || orders.length === 0) {
    return ROTA[0];
  }

  const latestOrderer = orders[0].orderer;
  const lastOrdererIndex = ROTA.indexOf(latestOrderer);
  const nextOrdererIndex = (lastOrdererIndex + 1) % ROTA.length;
  return ROTA[nextOrdererIndex];
};

export default getNextOrderer;
