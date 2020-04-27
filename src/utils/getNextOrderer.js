const ROTA = ['Babina', 'Yoshi', 'Anya', 'Chirag'];

export default (lastOrderer) => {
  const lastOrdererIndex = ROTA.indexOf(lastOrderer);
  const nextOrdererIndex = (lastOrdererIndex + 1) % ROTA.length;
  return ROTA[nextOrdererIndex];
};
