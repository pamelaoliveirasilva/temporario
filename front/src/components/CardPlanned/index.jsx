import React from 'react'; 
import IconPlannedCharges from '../../assets/IconPlannedCharges.svg';
import CardResume from '../../components/CardResume';

export default function CardPaid({ valueCharg }) {
  return (
    <CardResume
      icon={IconPlannedCharges}
      title="Cobranças Previstas"
      value={`R$${valueCharg}`}
      backgroundColor="#FCF6DC"
    />
  );
}
