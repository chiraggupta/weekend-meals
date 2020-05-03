import getNextOrderer from '../utils/getNextOrderer';

const getUniqueRestaurants = (orders) => {
  const restaurants = orders.map(({ restaurant }) => restaurant);
  const uniqueRestaurants = new Set(restaurants);
  return [...uniqueRestaurants].sort();
};

export const initialState = {
  orders: [],
  restaurants: [],
  nextOrderer: getNextOrderer(),
};

const OrdersReducer = (state, action) => {
  if (action.type === 'UPDATE') {
    const orders = [...action.orders];
    return {
      orders,
      restaurants: getUniqueRestaurants(orders),
      nextOrderer: getNextOrderer(orders),
    };
  }

  return state;
};

export default OrdersReducer;
