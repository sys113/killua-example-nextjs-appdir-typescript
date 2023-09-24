import { TProduct } from '@/types/product';
import { thunder } from 'killua';

const thunderCart = thunder({
  key: 'cart',
  encrypt: true,
  default: [] as TProduct[],
  expire: null,
  selectors: {
    cartIsEmpty: (thunder: TProduct[]) => Boolean(!thunder.length),
    isInCart: (thunder: TProduct[], payload: number) =>
      thunder.some((product) => product.id === payload),
    totalCartPrice: (thunder: TProduct[]) =>
      thunder.reduce((acc, product) => acc + product.price, 0),
  },
  reducers: {
    addToCart: (thunder: TProduct[], payload: TProduct) => [
      ...thunder,
      payload,
    ],
    removeFromCart: (thunder: TProduct[], payload: number) => [
      ...thunder.filter((product) => product.id !== payload),
    ],
  },
});

export { thunderCart };
