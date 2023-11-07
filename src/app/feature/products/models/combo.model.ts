export interface Combo {
  id: string;
  description: string;
}

export interface ComboItem {
  id: string;
  itemId: string;
  comboId: string;
}

export interface ComboBasePrice {
  id: string;
  startDate: Date;
  price: Date;
}
