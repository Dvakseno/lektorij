import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import RepeatsElements from '../../components/RepeatedElements/RepeatsElements';
import LogoLektorij from '../../components/LogoLektorij/LogoLektorij';
import classes from './Schedule.css';
import Speakers from '../../components/Speakers/Speakers';
// import ScheduleContent from '../../components/ScheduleContent/ScheduleContent';
import Partners from '../../components/Partners/Partners';

import Tabs from '../../components/Tabs/Tabs';
import Tab from '../../components/Tab/Tab';
import ScheduleItem from '../../components/ScheduleItem/ScheduleItem';

import pdf from '../../assets/docs/programma.pdf';

class Schedule extends Component {
  wheelHandler = e => {
    let delta = e.deltaY;
    if (this.props.location.pathname === '/schedule') {
      if (delta < 0 && window.pageYOffset === 0) {
        setTimeout(() => this.props.history.replace('/about'), 200);
      }
    }
  };
  render() {
    return (
      <Aux>
        <LogoLektorij />
        <RepeatsElements dark />
        <div onWheel={this.wheelHandler} style={{ width: '100vw' }}>
          <div className={classes.Container}>
            <div className={classes.TitleWrapper}>
              <h2>Выступающие</h2>
            </div>
            <Speakers />
            <div className={classes.TitleWrapper}>
              <h2>Программа</h2>
              <a href={pdf} target="_blank">
                Скачать pdf
              </a>

              <Tabs>
                <Tab title="14">
                  <ScheduleItem time="10:00">
                    <div
                      className={[classes.ScheduleItemTitle, classes.ScheduleItemTitleSlim].join(
                        ' '
                      )}
                    >
                      Регистрация
                    </div>
                  </ScheduleItem>
                  <div className={classes.ScheduleItemContent}>
                    <ScheduleItem>
                      <div
                        className={[classes.ScheduleItemTitle, classes.ScheduleItemTitleHall].join(
                          ' '
                        )}
                      >
                        Q White Hall / Брендинг
                      </div>
                    </ScheduleItem>
                    <ScheduleItem>
                      <div
                        className={[classes.ScheduleItemTitle, classes.ScheduleItemTitleHall].join(
                          ' '
                        )}
                      >
                        Q Mansard Hall / Диджитал
                      </div>
                    </ScheduleItem>
                  </div>
                  <ScheduleItem time="11:00-11:30">
                    <div
                      className={[classes.ScheduleItemTitle, classes.ScheduleItemTitleSlim].join(
                        ' '
                      )}
                    >
                      Открытие
                    </div>
                  </ScheduleItem>
                  <ScheduleItem time="11:30-12:30">
                    <div className={classes.ScheduleItemTitle}>Большая лекция</div>
                    <div className={classes.ScheduleItemSubTitle}>Как решать нерешаемые задачи</div>
                    <div className={classes.ScheduleItemSpeakers}>
                      Евгений Драпико, Денис Башев, Артур Арсёнов
                    </div>
                  </ScheduleItem>
                  <div className={classes.ScheduleItemContent}>
                    <ScheduleItem time="12:30-13:00">
                      <div className={classes.ScheduleItemTitle}>Лекция</div>
                      <div className={classes.ScheduleItemSubTitle}>7/12 посланий</div>
                      <div className={classes.ScheduleItemSpeakers}>Юрко Гуцуляк</div>
                    </ScheduleItem>
                    <ScheduleItem>
                      <div className={classes.ScheduleItemTitle}>Лекция</div>
                      <div className={classes.ScheduleItemSubTitle}>
                        Консалтинг и что мы делаем вообще
                      </div>
                      <div className={classes.ScheduleItemSpeakers}>Артур Арсёнов</div>
                    </ScheduleItem>
                  </div>
                  <div className={classes.ScheduleItemContent}>
                    <ScheduleItem time="13:00-16:00">
                      <div className={classes.ScheduleItemTitle}>Интенсив</div>
                      <div className={classes.ScheduleItemSubTitle}>Тема уточняется</div>
                      <div className={classes.ScheduleItemSpeakers}>Денис Башев, Юрко Гуцуляк</div>
                    </ScheduleItem>
                    <ScheduleItem>
                      <div className={classes.ScheduleItemTitle}>Воркшоп</div>
                      <div className={classes.ScheduleItemSubTitle}>Креативные методики</div>
                      <div className={classes.ScheduleItemSpeakers}>Сергей Андронов</div>
                    </ScheduleItem>
                  </div>
                  <ScheduleItem time="17:00-17:30">
                    <div className={classes.ScheduleItemTitle}>Лекция</div>
                    <div className={classes.ScheduleItemSubTitle} style={{ whiteSpace: 'nowrap' }}>
                      Абстрактное мышление, как метод творчества
                    </div>
                    <div className={classes.ScheduleItemSpeakers}>Дмитрий Игошин</div>
                  </ScheduleItem>
                  <div className={classes.ScheduleItemContent}>
                    <ScheduleItem time="17:30-20:30">
                      <div className={classes.ScheduleItemTitle}>Интенсив</div>
                      <div className={classes.ScheduleItemSubTitle}>
                        Три урока Парцифаля.<br />Своя и чужая идентичность
                      </div>
                      <div className={classes.ScheduleItemSpeakers}>Иван Величко</div>
                    </ScheduleItem>
                    <ScheduleItem>
                      <div className={classes.ScheduleItemTitle}>Воркшоп</div>
                      <div className={classes.ScheduleItemSubTitle}>
                        Как из идеи сделать продукт
                      </div>
                      <div className={classes.ScheduleItemSpeakers}>Артур Арсёнов</div>
                    </ScheduleItem>
                  </div>
                  <ScheduleItem time="21:00">
                    <div
                      className={[classes.ScheduleItemTitle, classes.ScheduleItemTitleSlim].join(
                        ' '
                      )}
                    >
                      Вечеринка
                    </div>
                  </ScheduleItem>
                </Tab>
                <Tab title="15">
                  <ScheduleItem time="10:00">
                    <div
                      className={[classes.ScheduleItemTitle, classes.ScheduleItemTitleSlim].join(
                        ' '
                      )}
                    >
                      Регистрация
                    </div>
                  </ScheduleItem>
                  <div className={classes.ScheduleItemContent}>
                    <ScheduleItem>
                      <div
                        className={[classes.ScheduleItemTitle, classes.ScheduleItemTitleHall].join(
                          ' '
                        )}
                      >
                        Q White Hall / Брендинг
                      </div>
                    </ScheduleItem>
                    <ScheduleItem>
                      <div
                        className={[classes.ScheduleItemTitle, classes.ScheduleItemTitleHall].join(
                          ' '
                        )}
                      >
                        Q Mansard Hall / Диджитал
                      </div>
                    </ScheduleItem>
                  </div>
                  <ScheduleItem time="10:50-11:00">
                    <div
                      className={[classes.ScheduleItemTitle, classes.ScheduleItemTitleSlim].join(
                        ' '
                      )}
                    >
                      Открытие
                    </div>
                  </ScheduleItem>
                  <ScheduleItem time="11:00-12:00">
                    <div className={classes.ScheduleItemTitle}>Дискуссия</div>
                    <div className={classes.ScheduleItemSubTitle}>Тема уточняется</div>
                    <div className={classes.ScheduleItemSpeakers}>Денис Башев, Юрко Гуцуляк</div>
                  </ScheduleItem>
                  <div className={classes.ScheduleItemContent}>
                    <ScheduleItem time="12:00-15:00">
                      <div className={classes.ScheduleItemTitle}>Интенсив</div>
                      <div className={classes.ScheduleItemSubTitle}>Практика вместо слов</div>
                      <div className={classes.ScheduleItemSpeakers}>Гоша Евдокимов</div>
                    </ScheduleItem>
                    <ScheduleItem time="12:00-12:30">
                      <div className={classes.ScheduleItemTitle}>Лекция</div>
                      <div className={classes.ScheduleItemSubTitle}>
                        Сложность проекта.<br />От процессов до импровизации
                      </div>
                      <div className={classes.ScheduleItemSpeakers}>Сергей Гуров</div>
                    </ScheduleItem>
                  </div>
                  <ScheduleItem time="12:30-14:00" right>
                    <div className={classes.ScheduleItemTitle}>Мастер-класс</div>
                    <div className={classes.ScheduleItemSubTitle}>
                      Основы менеджмента<br />для дизайнеров
                    </div>
                    <div className={classes.ScheduleItemSpeakers}>Сергей Прокофьев</div>
                  </ScheduleItem>
                  <ScheduleItem time="14:00-16:00" right>
                    <div className={classes.ScheduleItemTitle}>Интенсив</div>
                    <div className={classes.ScheduleItemSubTitle}>
                      Генерация идей в продуктовом дизайне
                    </div>
                    <div className={classes.ScheduleItemSpeakers}>Дмитрий Игошин</div>
                  </ScheduleItem>
                  <div className={classes.ScheduleItemContent}>
                    <ScheduleItem time="17:00-19:00">
                      <div className={classes.ScheduleItemTitle}>Лекция-беседа</div>
                      <div className={classes.ScheduleItemSubTitle}>
                        Творчество и хождение строем<br />в коммерческой фотографии
                      </div>
                      <div className={classes.ScheduleItemSpeakers}>Борис Бендиков</div>
                    </ScheduleItem>
                    <ScheduleItem>
                      <div className={classes.ScheduleItemTitle}>Воркшоп</div>
                      <div className={classes.ScheduleItemSubTitle}>Жалкая типографика</div>
                      <div className={classes.ScheduleItemSpeakers}>Филипп Нуруллин</div>
                    </ScheduleItem>
                  </div>
                  <ScheduleItem time="19:00">
                    <div
                      className={[classes.ScheduleItemTitle, classes.ScheduleItemTitleSlim].join(
                        ' '
                      )}
                    >
                      Закрытие
                    </div>
                  </ScheduleItem>
                </Tab>
              </Tabs>
            </div>
            {/* <ScheduleContent /> */}
            <div className={classes.TitleWrapper}>
              <h2>Поддержка мероприятия</h2>
            </div>
            <Partners />
          </div>
        </div>
      </Aux>
    );
  }
}

export default Schedule;
