import { ReactNode, createContext, useState } from 'react';

type Language = 'bg' | 'en';

type LanguageContext = {
  language: Language;
  onChangeLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContext | null>(null);

type LanguageContextProviderProps = {
  children: ReactNode;
};

export function LanguageContextProvider({
  children,
}: LanguageContextProviderProps) {
  const [language, setLanguage] = useState<Language>('bg');

  function languageChangeHandler(lang: Language) {
    setLanguage(lang);
  }

  return (
    <LanguageContext.Provider
      value={{
        language: language,
        onChangeLanguage: languageChangeHandler,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageContext;
