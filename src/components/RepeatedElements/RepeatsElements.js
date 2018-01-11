import React from 'react';

import ArtLink from './ArtLink/ArtLink';
import Email from './Email/Email';
import Subscribe from './Subscribe/Subscribe';
import Aux from '../../hoc/Auxiliary';

const repeatedElements = () => {
  return (
    <Aux>
      <ArtLink />
      <Subscribe />
      <Email />
    </Aux>
  );
};

export default repeatedElements;
