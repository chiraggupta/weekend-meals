const ROTA = ['Anya', 'Babina', 'Yoshi', 'Chirag', 'Family 💖'];

export default function getNextOrderer(orders) {
  if (!orders || orders.length === 0) {
    return ROTA[0];
  }

  const latestOrderer = orders[0].orderer;
  const lastOrdererIndex = ROTA.indexOf(latestOrderer);
  const nextOrdererIndex = (lastOrdererIndex + 1) % ROTA.length;
  return ROTA[nextOrdererIndex];
}