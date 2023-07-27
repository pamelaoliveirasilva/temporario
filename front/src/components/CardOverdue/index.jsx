// CardOverdue.jsx
import React from 'react';
import IconOverdueCharges from '../../assets/IconOverdueCharges.svg';
import CardResume from '../../components/CardResume';

export default function CardOverdue({ valueCharg }) {
  return (
    <CardResume
      icon={IconOverdueCharges}
      title='Cobranças Vencidas'
      value={valueCharg}
      backgroundColor='#FFEFEF'
    />
  );
};