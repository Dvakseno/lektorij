import React from 'react';

import classes from './Partners.css';

import partner1 from '../../assets/images/partners/partner1.png';
import partner0 from '../../assets/images/partners/partner0.png';
import partner2 from '../../assets/images/partners/partner2.png';
import partner3 from '../../assets/images/partners/partner3.png';

const Partners = props => (
  <div className={classes.Partners}>
    <a
      href="http://specia.pro/"
      target="_blank"
      rel="noopener noreferrer"
      className={classes.PartnersItem}
    >
      <img src={partner0} alt="" />
    </a>
    <a
      href="http://controforma.school/"
      target="_blank"
      rel="noopener noreferrer"
      className={classes.PartnersItem}
    >
      <img src={partner1} alt="" />
    </a>
    <a
      href="https://vk.com/intelligentdesign"
      target="_blank"
      rel="noopener noreferrer"
      className={classes.PartnersItem}
    >
      <img src={partner2} alt="" />
    </a>
    <a
      href="http://sredaobuchenia.ru/"
      target="_blank"
      rel="noopener noreferrer"
      className={classes.PartnersItem}
    >
      <img src={partner3} alt="" />
    </a>
  </div>
);

export default Partners;
