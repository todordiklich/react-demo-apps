import { ReactNode, createContext, useState } from 'react';

type context = {
  language: 'bg' | 'en';
  onChangeLanguage: (lang: 'bg' | 'en') => void;
};

const initialContext: context = {
  language: 'bg',
  onChangeLanguage: (lang: 'bg' | 'en') => {
    /**/
  },
};

const LanguageContext = createContext(initialContext);

export function LanguageContextProvider(props: { children: ReactNode }) {
  const [language, setLanguage] = useState<'bg' | 'en'>('bg');

  function languageChangeHandler(lang: 'bg' | 'en') {
    setLanguage(lang);
  }

  return (
    <LanguageContext.Provider
      value={{
        language: language,
        onChangeLanguage: languageChangeHandler,
      }}
    >
      {props.children}
    </LanguageContext.Provider>
  );
}

export default LanguageContext;
