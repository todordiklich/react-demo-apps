import { ReactNode } from 'react';
import { useParams } from 'react-router-dom';

import products from '../data/products';
import NotFound from '../components/NotFound';

interface Product {
  id: String;
  title: String;
  description: String;
  price: Number;
}

export default function ProductDetail() {
  const params = useParams();
  const prodId = params.id;
  const product: Product = products.find((prod) => prod.id === prodId)!;

  let content = (
    <>
      <NotFound />
    </>
  );

  if (product) {
    content = (
      <>
        <h1>{product.title}</h1>
        <h2>${product.price as ReactNode}</h2>
        <p>{product.description}</p>
      </>
    );
  }

  return content;
}
