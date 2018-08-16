export const enum Category {
  food = 'Еда',
  cosmetics = 'Косметика',
  home = 'Товары для дома',
  clothes = 'Одежда'
};

export const enum Sizes {
  xs = 'XS',
  s = 'S',
  m = 'M',
  l = 'L',
  xl = 'XL',
  xxl = 'XXL'
};

export const enum Colors {
  black = 'black',
  white = 'white',
  blue = 'blue',
  green = 'green',
  pink = 'pink',
  brown = 'brown',
  gray = 'gray',
  orange = 'orange',
  red = 'red'
};

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;
  image: string;
  colors?: Colors[];
  sizes?: Sizes[];
  numberInCart: number;
  totalPrice: number;
};

export class ProductModel implements IProduct {

  constructor(
    public id: number,
    public name: string,
    public description: string,
    public price: number,
    public category: Category,
    public isAvailable: boolean,
    public image: string,
    public colors: Colors[],
    public sizes: Sizes[],
    public totalPrice: number = price,
    public numberInCart: number = 0
  ) {}
}

