import React, { createContext } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = (props) => {
  const [language, setLanguage] = React.useState('EN');
  return (
    <>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        {props.children}
      </LanguageContext.Provider>
    </>
  );
};
