export interface Bread {
  id: string;
  description: string;
}

export interface SandwichBread {
  id: string;
  sandwichId: string;
  breadId: string;
}
