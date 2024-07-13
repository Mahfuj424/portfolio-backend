/* eslint-disable @typescript-eslint/no-explicit-any */
import { TFilterOptions, TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

export const getAllProductFromDB = async (filterOptions: TFilterOptions) => {
  const { minPrice, maxPrice, sortBy, searchTerm } = filterOptions;

  let query = Product.find();

  if (minPrice !== undefined) {
    query = query.where('price').gte(minPrice);
  }
  
  if (maxPrice !== undefined) {
    query = query.where('price').lte(maxPrice);
  }

  if (searchTerm) {
    query = query.or([
      { name: { $regex: searchTerm, $options: "i" } },
      { brand: { $regex: searchTerm, $options: "i" } },
    ]);
  }

  if (sortBy === 'lowToHigh') {
    query = query.sort({ price: 1 });
  } else if (sortBy === 'highToLow') {
    query = query.sort({ price: -1 });
  }

  const result = await query.exec();
  return result;
};

const updateProductIntoDB = async (id: string, payload: Partial<TProduct>) => {
  const result = await Product.findByIdAndUpdate(
    id,
    { $set: payload },
    {
      new: true,
      runValidators: true,
    }
  );
  return result;
};

const deleteProductFromDB = async (id: string) => {
  const result = await Product.deleteOne({ _id: id });
  return result;
};

const getAvailableProductFromDB = async (filterOptions: TFilterOptions) => {
  const { minPrice, maxPrice, sortBy } = filterOptions;

  const query: any = {};

  if (minPrice !== undefined && maxPrice !== undefined) {
    query.price = { $gte: minPrice, $lte: maxPrice };
  } else if (minPrice !== undefined) {
    query.price = { $gte: minPrice };
  } else if (maxPrice !== undefined) {
    query.price = { $lte: maxPrice };
  }

  const sort: any = {};
  if (sortBy === "highToLow") {
    sort.price = -1;
  } else if (sortBy === "lowToHigh") {
    sort.price = 1;
  }

  const products = await Product.find(query).sort(sort);
  return products;
};

export const productSerivces = {
  createProductIntoDB,
  getSingleProductFromDB,
  getAllProductFromDB,
  updateProductIntoDB,
  deleteProductFromDB,
  getAvailableProductFromDB,
};
