export interface Topping {
  toppingId: string;
  description: string;
  price: number;
}

export interface SandwichTopping {
  id: string;
  toppingId: string;
  sandwichId: string;
}
