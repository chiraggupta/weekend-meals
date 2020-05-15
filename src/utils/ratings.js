export const Ratings = {
  AWESOME: 'rating_awesome',
  AVERAGE: 'rating_average',
  TERRIBLE: 'rating_terrible',
};

const ratingIcons = {
  [Ratings.AWESOME]: { icon: '😍', inputLabel: 'Delicious!', label: 'Awesome' },
  [Ratings.AVERAGE]: {
    icon: '👍',
    inputLabel: 'Not bad, will try other dishes.',
    label: 'Average',
  },
  [Ratings.TERRIBLE]: {
    icon: '❌',
    inputLabel: 'It was terrible, never again!',
    label: 'Terrible',
  },
};

export const getRatingIcon = (rating) =>
  (ratingIcons[rating] && ratingIcons[rating].icon) || '';

export const getRatingInputLabel = (rating) =>
  (ratingIcons[rating] && ratingIcons[rating].inputLabel) || '';

export const getRatingLabel = (rating) =>
  (ratingIcons[rating] && ratingIcons[rating].label) || '';
