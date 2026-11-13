import React, { createContext, useContext, useEffect, useState } from 'react';

type Language = 'id' | 'en';

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
  t: (id: string, en: string) => string;
}>({ language: 'id', setLanguage: () => {}, t: (id) => id });

export const LanguageProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('id');

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: (id, en) => language === 'id' ? id : en }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
