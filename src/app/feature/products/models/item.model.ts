export interface Item {
  id: string;
  description: string;
  category: string;
  price?: number;
}

export interface ItemBasePrice {
  id: string;
  startDate: Date;
  price: number;
}
