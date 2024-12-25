import React from 'react';
import logo from '../assets/investment-calculator-logo.png';

export const Header = () => {
  return (
    <header id='header'>
      <img src={logo} alt='' />
      <h1>Investment Calcualator</h1>
    </header>
  );
};
