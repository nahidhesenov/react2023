import React, { createContext, useContext, useState } from 'react';

const DilKonteksti = createContext();

export const DilContext = ({ children }) => {
  const [dil, setDil] = useState('az'); 

  const deyisme = (yeniDil) => {
    setDil(yeniDil);
  };

  return (
    <DilKonteksti.Provider value={{ dil, deyisme }}>
      {children}
    </DilKonteksti.Provider>
  );
};

export const useDilKonteksti = () => {
  return useContext(DilKonteksti);
};