interface Product {
  _id: string;
  id: string;
  image: string;
  title?: string;
  name?: string;
  subsTitle?: string;
  content?: string;
  price?: number;
  quantity?: number
}
interface Products {
  products: Array<Product>;
}
export { Product, Products };
