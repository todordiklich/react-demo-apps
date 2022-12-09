import { Fragment, useEffect } from 'react';
import { useParams, Routes, Route, Link } from 'react-router-dom';

import Comments from '../components/comments/Comments';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';

const QuoteDetail = () => {
  const params = useParams();

  const { quoteId } = params;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      {/* <Outlet /> */}
      <Routes>
        <Route
          path=""
          element={
            <div className="centered">
              <Link className="btn--flat" to="comments">
                Load Comments
              </Link>
            </div>
          }
        />
        <Route path="comments" element={<Comments />} />
      </Routes>
    </Fragment>
  );
};

export default QuoteDetail;
