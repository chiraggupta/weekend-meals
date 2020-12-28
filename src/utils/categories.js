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

export function getCategories() {
  return Object.keys(categoryIcons);
}

export function getCategoryIcon(category) {
  return categoryIcons[category] || '🍟';
}
