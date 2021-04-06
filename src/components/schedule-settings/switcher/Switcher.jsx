import React from 'react';
import Switch from 'react-switch';
import './switcher.scss';

const Switcher = ({ handleChange, checked, id }) => {
  return (
    <Switch
      onChange={handleChange}
      checked={checked}
      offColor='#CFDBEA'
      onColor='#4CDEB2'
      className='react-switch'
      height={36}
      width={96}
      id={id + ''}
      borderRadius={18}
      checkedIcon={
        <p
          style={{
            fontWeight: '600',
            fontStyle: 'normal',
            fontSize: '18px',
            lineHeight: '19.87px',
            padding: '9px 44px 6px 12px',
          }}
        >
          Mon
        </p>
      }
      uncheckedIcon={
        <p
          style={{
            fontWeight: '600',
            fontStyle: 'normal',
            fontSize: '18px',
            lineHeight: '19.87px',
            padding: '9px 9px 6px',
          }}
        >
          Mon
        </p>
      }
    />
  );
};

export default Switcher;
