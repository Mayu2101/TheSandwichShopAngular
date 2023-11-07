export interface Size {
  id: string;
  description: string;
  extraCost: number;
}

export interface ItemSize {
  id: string;
  itemId: string;
  sizeId: string;
}
