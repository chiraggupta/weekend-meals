import getNextOrderer from '../utils/getNextOrderer';

const getUniqueRestaurantsWithDetails = (orders) => {
  return orders.reduce(
    (accumulator, { restaurant, category }) => ({
      ...accumulator,
      [restaurant]: category,
    }),
    {},
  );
};

export const initialState = {
  orders: [], // Array<{category, date, orderer, rating, restaurant}>, Sorted New to Old
  restaurantsWithDetails: {}, // Object<{ restaurant: category }
  nextOrderer: getNextOrderer(), // String
};

const OrdersReducer = (state, action) => {
  if (action.type === 'UPDATE') {
    const orders = [...action.orders];
    return {
      orders,
      restaurantsWithDetails: getUniqueRestaurantsWithDetails(orders),
      nextOrderer: getNextOrderer(orders),
    };
  }

  return state;
};

export default OrdersReducer;
