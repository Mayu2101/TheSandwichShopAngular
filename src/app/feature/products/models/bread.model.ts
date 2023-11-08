export interface Bread {
  breadTypeId: string;
  description: string;
}

export interface SandwichBread {
  id: string;
  sandwichId: string;
  breadId: string;
}
