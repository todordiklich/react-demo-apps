import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import products from '../data/products';

export default function Products() {
  return (
    <div>
      <h1>Our products</h1>
      <ul className="product">
        {products.map((product) => (
          <Link to={`/products/${product.id}`}>
            <li key={product.id as string}>
              {product.title} (${product.price as ReactNode})
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
