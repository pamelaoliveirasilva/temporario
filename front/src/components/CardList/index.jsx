import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Chips from '../Chips';

const style = {
  width: '100%',
  height: '100px'
};

const listItemTextStyle = {
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '18px',
  color: '#3F3F55',
};

const listItemTextStyleSecond = {
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '24px',
  color: '#3F3F55',
};

export default function CardList({ icon, title, value, backgroundColor, chipsBgColor, chipsTxColor, items }) {
  return (
    <List sx={{ ...style, backgroundColor: backgroundColor }} component='nav' aria-label='mailbox folders'>
      <ListItem style={{ backgroundColor: '#FFFFFF', borderRadius: '30px 30px 0 0', color: '#3F3F55', fontWeight: 'bold', fontSize: '18px', padding:'15px 0x 15px 0' }}>
        <img src={icon} alt='' />
        <ListItemText primary={title} />
        <Chips bcColor={chipsBgColor} txColor={chipsTxColor} />
      </ListItem>
      <Divider sx={{ backgroundColor: 'transparent' }} />
      <ListItem divider style={{ backgroundColor: '#FFFFFF', color: '#3F3F55', fontWeight: 'bold', fontSize: '70px' }}>
        <ListItemText style={{ fontSize: '30px' }} primary={value[0]} />
        <ListItemText primary={value[1]} />
        <ListItemText primary={value[2]} />
      </ListItem>
      <Divider sx={{ backgroundColor: 'transparent' }} />
      {items.map((item, index) => (
        <ListItem key={index} divider style={{ backgroundColor: '#FFFFFF', display: 'flex' }}>
          <ListItemText primary={item[0]} primaryTypographyProps={{ style: listItemTextStyle14 }} />
          <ListItemText primary={item[1]} primaryTypographyProps={{ style: listItemTextStyle14 }} />
          <ListItemText primary={item[2]} primaryTypographyProps={{ style: listItemTextStyle14 }} />
        </ListItem>
      ))}
      <ListItem style={{ backgroundColor: '#FFFFFF', borderRadius: '0 0 30px 30px', boxShadow: '0px 4px 4px #ACD9C540', display: 'flex', justifyContent: 'center' }}>
        <a style={{ display: 'block', textAlign: 'center', color: '#DA0175' }} href='url'>Ver todos</a>
      </ListItem>
    </List>
  )
}