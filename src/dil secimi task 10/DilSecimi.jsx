import React from 'react';
import { useDilKonteksti } from './DilContext';

const DilSecimi = () => {
  const { deyisme } = useDilKonteksti();

  const handleDilDegisimi = (yeniDil) => {
    deyisme(yeniDil);
  };

  return (
    <div>
      <button style={{padding:"15px" , margin:'0px 10px', borderRadius:'20px' ,border:'none' , boxShadow:'0px 0px 10px grey'}} onClick={() => handleDilDegisimi('az')}>AZ</button>
      <button style={{padding:"15px" , margin:'0px 10px', borderRadius:'20px' ,border:'none' , boxShadow:'0px 0px 10px grey'}} onClick={() => handleDilDegisimi('en')}>EN</button>
      <button style={{padding:"15px" , margin:'0px 10px', borderRadius:'20px' ,border:'none' , boxShadow:'0px 0px 10px grey'}} onClick={() => handleDilDegisimi('tr')}>TR</button>
    </div>
  );
};

export default DilSecimi;