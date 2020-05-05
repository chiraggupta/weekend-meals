import getNextOrderer from '../utils/getNextOrderer';

const getUniqueRestaurantsWithCategories = (orders) => {
  return orders.reduce(
    (accumulator, { restaurant, category }) => ({
      ...accumulator,
      [restaurant]: category,
    }),
    {},
  );
};

export const initialState = {
  orders: [],
  restaurantsWithCategories: {},
  nextOrderer: getNextOrderer(),
};

const OrdersReducer = (state, action) => {
  if (action.type === 'UPDATE') {
    const orders = [...action.orders];
    return {
      orders,
      restaurantsWithCategories: getUniqueRestaurantsWithCategories(orders),
      nextOrderer: getNextOrderer(orders),
    };
  }

  return state;
};

export default OrdersReducer;
