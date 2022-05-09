export const Products = [
  {
    ntf: '⬜', id: '1', productName: 'circle', category: 'shape', stock: 8, price: 100
  },
  {
    ntf: '⚪', id: '2', productName: 'square', category: 'shape', stock: 5, price: 200
  },
  {
    ntf: '😺', id: '3', productName: 'cat', category: 'animal', stock: 7, price: 50
  },
  {
    ntf: '🐶', id: '4', productName: 'dog', category: 'animal', stock: 4, price: 75
  },
  {
    ntf: '🐢', id: '5', productName: 'turtle', category: 'animal', stock: 14, price: 25
  },
  {
    ntf: '🌼', id: '6', productName: 'flower', category: 'flower', stock: 3, price: 99
  },
  {
    ntf: '🌹', id: '7', productName: 'rose', category: 'flower', stock: 4, price: 60
  },
  {
    ntf: '🥑', id: '8', productName: 'avocado', category: 'meal', stock: 9, price: 34
  },
  {
    ntf: '☠', id: '9', productName: 'death', category: 'human', stock: 1, price: 666
  }
  // {
  //   ntf: '🏃‍♂️💨', id: '10', productName: 'hurry', category: 'human', stock: 34, price: 80
  // },
  // {
  //   ntf: '🤜💥🤛', id: '11', productName: 'rock', category: 'human', stock: 3, price: 600
  // }
];

export const User = {
  userName: 'john Doe',
  userCart: [
    { productId: '7', quanty: 5 },
    { productId: '3', quanty: 35 }
  ],
  favoritesId: ['7', '5']
};
export default Products;
