import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CardOverdueCharges from '../CardOverdueCharges';
import CardPaidCharges from '../CardPaidCharges';
import CardPlannedCharges from '../CardPlannedCharges';
import CardPlanned from '../CardPlanned';
import CardOverdue from '../CardOverdue';
import CardPaid from '../CardPaid';
import CardDefaultedCustomers from '../CardDefaulterCustomers';
import CardNonDefaultingCustomers from '../CardNon-DefaultingCustomers';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'white',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function CSSGrid() {
  const itemStyles = {
    display: 'block',
    margin: 0, 
    padding: 0, 
    listStyle: 'none', 
    textDecoration: 'none', 
    textAlign: 'left', 
    boxShadow: 'none', 
    backgroundColor: '#F8F8F9'
  };

  return (
    <Box sx={{ width: '100%', backgroundColor: '#F8F8F9', marginLeft:'20px' }}>
      <Box display='grid' gridTemplateColumns='repeat(12, 1fr)' gap={2}>
        <Box gridColumn='span 4'>
          <Item style={{...itemStyles, height: '100px'}}>
            <CardPaid valueCharg={30000}/>
          </Item>
        </Box>
        <Box gridColumn='span 4'>
          <Item style={itemStyles}>
            <CardOverdue valueCharg={7000}/>
          </Item>
        </Box>
        <Box gridColumn='span 4' >
          <Item style={itemStyles}>
            <CardPlanned valueCharg={10000}/>
          </Item>
        </Box>
        <Box gridColumn='span 4' >
          <Item style={itemStyles}>
            <CardOverdueCharges/>
          </Item>
        </Box>
        <Box gridColumn='span 4' >
          <Item style={itemStyles}>
            <CardPlannedCharges/>
          </Item>
        </Box>
        <Box gridColumn='span 4'>
          <Item style={itemStyles}>
            <CardPaidCharges/>
          </Item>
        </Box>
        <Box gridColumn='span 6'>
          <Item style={itemStyles}>
            <CardDefaultedCustomers/>
          </Item>
        </Box>
        <Box gridColumn='span 6'>
          <Item style={itemStyles}>
            <CardNonDefaultingCustomers/>
          </Item>
        </Box>
      </Box>
    </Box>
  );
}