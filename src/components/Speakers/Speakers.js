import React, { Component } from 'react';

import classes from './Speakers.css';
import SpeakersItem from './SpeakersItem/SpeakersItem';

import img1 from '../../assets/images/speakers/Velichko.jpg';
import img2 from '../../assets/images/speakers/Drapiko.jpg';
import img3 from '../../assets/images/speakers/Igoshin.jpg';
import img4 from '../../assets/images/speakers/Arsenov.jpg';
import img5 from '../../assets/images/speakers/Prokofiev.jpg';
import img6 from '../../assets/images/speakers/Andronov.jpg';
import img7 from '../../assets/images/speakers/Motin.jpg';
import img8 from '../../assets/images/speakers/Bashev.jpg';

class Speakers extends Component {
  render() {
    const speakersList = [
      {
        id: 1,
        image: img1,
        name: 'Иван Величко',
        company: 'Shuka Design',
        link: 'https://shuka.design/',
        position: 'Арт-директор'
      },
      {
        id: 2,
        image: null,
        name: 'Юрко Гуцуляк',
        company: 'Студия графического дизайна Юрка Гуцуляка',
        link: 'http://gstudio.com.ua/',
        position: null
      },
      {
        id: 3,
        image: img2,
        name: 'Евгений Драпико',
        company: 'Fusion Centre',
        link: '/',
        position: 'Зам. директора'
      },
      {
        id: 4,
        image: img3,
        name: 'Дмитрий Игошин',
        company: 'AIC',
        link: 'http://www.aic.ru/',
        position: 'Арт-директор'
      },
      {
        id: 5,
        image: img4,
        name: 'Артур Арсёнов',
        company: 'Looi Factory',
        link: 'https://looi.ru/',
        position: 'Президент'
      },
      {
        id: 6,
        image: img8,
        name: 'Денис Башев',
        company: 'Dilettante',
        link: 'http://dilettant.co/',
        position: 'Графический дизайнер'
      },
      {
        id: 7,
        image: img5,
        name: 'Сергей Прокофьев',
        company: 'CreativePeople',
        link: 'https://cpeople.ru/',
        position: 'Управляющий партнёр'
      },
      {
        id: 8,
        image: null,
        name: 'Спикер уточняется',
        company: null,
        link: '/',
        position: null
      },
      {
        id: 9,
        image: img6,
        name: 'Сергей Андронов',
        company: 'Looi Factory',
        link: 'https://looi.ru/',
        position: 'Дизайн-директор'
      },
      {
        id: 10,
        image: null,
        name: 'Спикер уточняется',
        company: null,
        link: '/',
        position: null
      },
      {
        id: 11,
        image: null,
        name: 'Спикер уточняется',
        company: null,
        link: '/',
        position: null
      },
      {
        id: 12,
        image: null,
        name: 'Спикер уточняется',
        company: null,
        link: '/',
        position: null
      },
      {
        id: 13,
        image: img7,
        name: 'Александр Мотин',
        company: 'Braind',
        link: 'http://braind.agency/',
        position: 'Креативный директор'
      }
    ];
    const list = speakersList.map(speaker => {
      return (
        <SpeakersItem
          key={speaker.id}
          img={speaker.image}
          name={speaker.name}
          company={speaker.company}
          href={speaker.link}
          position={speaker.position}
        />
      );
    });
    return <div className={classes.Speakers}>{list}</div>;
  }
}

export default Speakers;
