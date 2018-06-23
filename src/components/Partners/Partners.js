import React from 'react';

import classes from './Partners.css';
import Partner from './Partner/Partner';

import partner0 from '../../assets/images/partners/partner0.png';
import partner1 from '../../assets/images/partners/partner1.png';
import partner2 from '../../assets/images/partners/partner2.png';
import partner3 from '../../assets/images/partners/partner3.png';
import partner4 from '../../assets/images/partners/partner4.png';
import partner5 from '../../assets/images/partners/partner5.png';
import partner6 from '../../assets/images/partners/partner6.png';
import partner7 from '../../assets/images/partners/partner7.png';
import partner8 from '../../assets/images/partners/partner8.png';
import partner9 from '../../assets/images/partners/partner9.png';
import partner10 from '../../assets/images/partners/partner10.png';
import partner11 from '../../assets/images/partners/partner11.png';
import partner12 from '../../assets/images/partners/partner12.png';
import partner13 from '../../assets/images/partners/partner13.png';

const PartnersList = [
  {
    id: 0,
    image: partner0,
    link: 'http://specia.pro/'
  },
  {
    id: 1,
    image: partner1,
    link: 'http://controforma.school/'
  },
  {
    id: 5,
    image: partner5,
    link: 'http://school.rs/'
  },
  {
    id: 8,
    image: partner8,
    link: 'http://www.designspb.ru/'
  },
  {
    id: 9,
    image: partner9,
    link: 'https://www.instagram.com/mugsmag/'
  },
  {
    id: 4,
    image: partner4,
    link: 'http://www.typetersburg.ru/2017/'
  },
  {
    id: 10,
    image: partner10,
    link: 'https://t.me/nowhow'
  },
  {
    id: 7,
    image: partner7,
    link: 'https://bangbangeducation.ru/'
  },
  {
    id: 2,
    image: partner2,
    link: 'https://vk.com/intelligentdesign'
  },
  {
    id: 6,
    image: partner6,
    link: 'http://its.agency/'
  },
  {
    id: 12,
    image: partner12,
    link: 'http://www.bereg.net/'
  },
  {
    id: 3,
    image: partner3,
    link: 'http://sredaobuchenia.ru/'
  },
  {
    id: 11,
    image: partner11,
    link: 'https://vk.com/moyka8'
  },
  {
    id: 13,
    image: partner13,
    link: 'http://www.copyshop-orange.ru/'
  }
];

const Partners = props => (
  <div className={classes.Partners}>
    {PartnersList.map(item => <Partner image={item.image} link={item.link} key={item.id} />)}
  </div>
);

export default Partners;
