import { useContext } from 'react';

import LanguageContext from '../store/lang-context';

export default function useLanguageContext() {
  const langCtx = useContext(LanguageContext);

  if (!langCtx) {
    throw new Error(
      'useLanguageContext must be used within a LanguageContextProvider'
    );
  }

  return langCtx;
}
