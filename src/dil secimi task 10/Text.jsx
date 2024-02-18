import React from 'react';
import { useDilKonteksti } from './DilContext';

const Text = () => {
  const { dil } = useDilKonteksti();

  const dilMetni = {
    az: 'Salam Xoş Gəlmisiniz.',
    en: 'Hello and welcome.',
    tr: 'Merhaba ve hoşgeldin.',
  };

  return <h1>{dilMetni[dil]}</h1>;
};

export default Text;