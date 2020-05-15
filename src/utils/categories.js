const categoryIcons = {
  American: '🇺🇸',
  Burgers: '🍔',
  Carribean: '🇯🇲',
  Chicken: '🍗',
  Chinese: '🥡',
  'Fish & Chips': '🐟🍟',
  Indian: '🇮🇳',
  Italian: '🇮🇹',
  Japanese: '🍣',
  Kebab: '🥙',
  Korean: '🇰🇷',
  Mexican: '🌮',
  Pizza: '🍕',
  Thai: '🇹🇭',
};

export const getCategories = () => Object.keys(categoryIcons);

export const getCategoryIcon = (category) => {
  return categoryIcons[category] || '🍟';
};
