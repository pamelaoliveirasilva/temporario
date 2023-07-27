import React from 'react';
import IconPaidCharges from '../../assets/IconPaidCharges.svg';
import CardResume from '../../components/CardResume';

export default function CardPlanned({ valueCharg }) {
  return (
    <CardResume
      icon={IconPaidCharges}
      title="Cobranças Pagas"
      value={`R$ ${valueCharg}`}
      backgroundColor='#EEF6F6'
    />
  );
}
