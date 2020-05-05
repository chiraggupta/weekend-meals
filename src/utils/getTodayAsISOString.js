const getTodayAsISOString = () =>
  new Date(Date.now()).toISOString().split('T')[0];

export default getTodayAsISOString;
