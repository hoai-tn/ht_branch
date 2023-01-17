interface Product {
  id: string;
  image: string;
  title: string;
  name: string;
  subsTitle?: string;
  content: string;
  price: number;
}
interface Products {
  products: Array<Product>;
}
export { Product, Products };
