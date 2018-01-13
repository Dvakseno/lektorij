import React from 'react';

import ArtLink from './ArtLink/ArtLink';
import Email from './Email/Email';
import Subscribe from './Subscribe/Subscribe';
import Aux from '../../hoc/Auxiliary';

const repeatedElements = props => {
  return (
    <Aux>
      <ArtLink dark={props.dark} />
      <Subscribe dark={props.dark} />
      <Email />
    </Aux>
  );
};

export default repeatedElements;
