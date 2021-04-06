import React from 'react';
import Switcher from '../switcher/Switcher';
import { TimePicker } from 'antd';
import moment from 'moment';
import './schedule.scss';

const Schedule = ({
  handleChange,
  handleStartTimeChange,
  handleEndTimeChange,
  checked,
  id,
  open,
  close,
  hour = 12,
}) => {
  const format = 'HH:mm';
  return (
    <div className='schedule__container'>
      {checked ? (
        <div className='schedule__container__checked'>
          <div className='schedule__container__checked--switcher'>
            <Switcher handleChange={handleChange} checked={checked} id={id} />
          </div>
          <div className='schedule__container__checked__content'>
            <p className='schedule__container__checked__content--info'>
              Czas otwarcia
            </p>
            <div className='schedule__container__checked__content__time'>
              <TimePicker
                defaultValue={moment(open, format)}
                format={format}
                onChange={(time, timeString) => {
                  handleStartTimeChange(timeString);
                }}
              />
            </div>
            <div className='schedule__container__checked__content--line'></div>
            <p className='schedule__container__checked__content--remainTime'>
              {hour} godz
            </p>
            <div className='schedule__container__checked__content--line'></div>
            <p className='schedule__container__checked__content--info'>
              Czas zamknecia
            </p>
            <div className='schedule__container__checked__content__time'>
              <TimePicker
                defaultValue={moment(close, format)}
                format={format}
                onChange={(time, timeString) => {
                  handleEndTimeChange(timeString);
                }}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className='schedule__container__unchecked'>
          <div className='schedule__container__unchecked--switcher'>
            <Switcher handleChange={handleChange} checked={checked} id={id} />
          </div>
          <div className='schedule__container__unchecked__empty'>
            <p>Dzien volny</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Schedule;
