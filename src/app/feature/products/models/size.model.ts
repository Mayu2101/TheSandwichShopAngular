export interface Size {
  sizeId: string;
  description: string;
  extraCost: number;
}

export interface ItemSize {
  id: string;
  itemId: string;
  sizeId: string;
}
