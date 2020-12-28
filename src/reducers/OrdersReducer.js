import getNextOrderer from '../utils/getNextOrderer';

function getUniqueRestaurantsWithDetails(orders) {
  return orders.reduce(
    (
      accumulator,
      {
        restaurant: orderRestaurant,
        category: orderCategory,
        rating: orderRating,
      },
    ) => {
      const previousRating =
        accumulator[orderRestaurant] && accumulator[orderRestaurant].rating;
      const newRating = previousRating || orderRating;
      return {
        ...accumulator,
        [orderRestaurant]: { category: orderCategory, rating: newRating },
      };
    },
    {},
  );
}

export const initialState = {
  orders: [], // Array<{category, date, orderer, rating, restaurant}>, Sorted New to Old
  restaurantsWithDetails: {}, // Object<{ restaurant: { category, rating} }
  nextOrderer: getNextOrderer(), // String
};

export default function OrdersReducer(state, action) {
  if (action.type === 'UPDATE') {
    const orders = [...action.orders];
    return {
      orders,
      restaurantsWithDetails: getUniqueRestaurantsWithDetails(orders),
      nextOrderer: getNextOrderer(orders),
    };
  }

  return state;
}
