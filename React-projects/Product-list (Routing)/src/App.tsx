import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './routes/Home';
import Layout from './components/Layout';

const Products = lazy(() => import('./routes/Products'));
const ProductDetail = lazy(() => import('./routes/ProductDetail'));
const NotFound = lazy(() => import('./components/NotFound'));

export default function App() {
  return (
    <>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}
