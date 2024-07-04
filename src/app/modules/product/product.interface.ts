export type TProductVarient = {
  type: string;
  value: string;
};

export type TProductInventory = {
  quantity: number;
  inStock: boolean;
};

export interface IProduct {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: TProductVarient[];
  inventory: TProductInventory;
}
