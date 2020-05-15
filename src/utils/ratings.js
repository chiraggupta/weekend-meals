const ratingIcons = {
  rating_awesome: '😍',
  rating_average: '👍',
  rating_terrible: '❌',
};

export const getRatingIcon = (rating) => ratingIcons[rating] || '';
