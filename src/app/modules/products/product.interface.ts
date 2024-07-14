export type TProduct = {
  image: string;
  name: string;
  description: string;
  brand: string;
  quantity: number;
  price: number;
  rating: number;
};

export type TFilterOptions = {
  minPrice?: number;
  maxPrice?: number;
  sortBy?: "Price - Low to High" | "Price - High to Low" | "Default";
  name?: string;
  brand?: string;
  searchTerm?: string;
};
