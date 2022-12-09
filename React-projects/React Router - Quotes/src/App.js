import { Route, Routes, Navigate } from 'react-router-dom';

import NotFound from './pages/NotFound';
import NewQuote from './pages/NewQuote';
import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/quotes" />} />
        <Route path="/quotes" element={<AllQuotes />} />
        <Route path="/quotes/:quoteId/*" element={<QuoteDetail />}>
          {/* <Route
            path=""
            element={
              <div className="centered">
                <Link className="btn--flat" to={`comments`}>
                  Load Comments
                </Link>
              </div>
            }
          />
          <Route path="comments" element={<Comments />} /> */}
        </Route>
        <Route path="/new-quote" element={<NewQuote />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
