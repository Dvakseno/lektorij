import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/images/logo_lektorij.png';

const logoLektorij = () => {
  const style = {
    position: 'fixed',
    top: '30px',
    left: '30px'
  };
  return (
    <NavLink to="/" exact style={style}>
      <img src={logo} alt="Лекторий" />
    </NavLink>
  );
};

export default logoLektorij;
