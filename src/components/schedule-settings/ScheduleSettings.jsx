import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Schedule from './schedule/Schedule';
import './scheduleSettings.scss';

const ScheduleSettings = () => {
  const url = 'http://api.gastro.systems/admin/testTask';

  const [data, setData] = useState([]);
  const [startTime, setStartTime] = useState('9:00');
  const [endTime, setEndTime] = useState('21:00');

  useEffect(() => {
    const postData = async () => {
      const response = await axios.post(url, {
        token: 'wadgu29ufan2',
        password: 'testTask',
      });
      setData(response.data.schedule);
    };

    postData();
  }, []);

  const handleChange = (checked, e, id) => {
    data.forEach((item, i) => {
      item.id = i;
    });

    let b = data.map((item) => {
      if (item.id === +id) {
        return {
          ...item,
          working: checked,
        };
      } else {
        return item;
      }
    });
    setData(b);
  };

  const handleStartTimeChange = (timeString) => {
    setStartTime(timeString);
  };

  const handleEndTimeChange = (timeString) => {
    setEndTime(timeString);
  };

  const x = startTime.toString().split(':');
  const c = endTime.toString().split(':');

  let hour = +c[0] - +x[0];

  return (
    <div className='schedule__settings'>
      <div className='schedule__settings__title'>
        <h1>Schedule Settings</h1>
      </div>
      <div className='schedule__settings__container'>
        {data.map((item, idx) => {
          return (
            <Schedule
              id={idx}
              key={idx}
              checked={item.working}
              handleChange={(checked, e, id) => handleChange(checked, e, id)}
              open={item.open}
              close={item.close}
              handleStartTimeChange={handleStartTimeChange}
              handleEndTimeChange={handleEndTimeChange}
              hour={hour}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ScheduleSettings;
