import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Chips from '../../components/Chips';

const style = {
  width: '100%',
  bgcolor: '#F8F8F9',
};

const listItemTextStyle18 = {
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '18px',
  color: '#3F3F55',
  flex: '0 0 80%',
};

const listItemTextStyle16Center = {
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '16px',
  color: '#3F3F55',
  flex: '0 0 80%',
  textAlign: 'center',
};

const listItemTextStyle14 = {
  fontFamily: 'Nunito, sans-serif',
  fontSize: '14px',
  color: '#6E6E85',
  flex: '0 0 20%',
};

export default function CardPaidCharges() {
  return (
    <List sx={style} component='nav' aria-label='mailbox folders'>
      <ListItem style={{ backgroundColor: '#FFFFFF', borderRadius: '30px 30px 0 0' }}>
        <ListItemText primary='Cobranças Pagas' primaryTypographyProps={{ style: listItemTextStyle18 }} />
        <Chips bcColor='#EEF6F6' txColor='#1FA7AF' />
      </ListItem>
      <Divider />
      <ListItem divider style={{ backgroundColor: '#FFFFFF', display: 'flex' }}>
        <ListItemText primary='Cliente' primaryTypographyProps={{ style: { ...listItemTextStyle18, textAlign: 'left' } }} />
        <ListItemText primary='ID da cob.' primaryTypographyProps={{ style: { ...listItemTextStyle18, textAlign: 'center' } }} />
        <ListItemText primary='Valor' primaryTypographyProps={{ style: { ...listItemTextStyle18, textAlign: 'left' } }} />
      </ListItem>
      <Divider />
      <ListItem divider style={{ backgroundColor: '#FFFFFF', display: 'flex' }}>
        <ListItemText primary='Sara Silva' primaryTypographyProps={{ style: listItemTextStyle14 }} />
        <ListItemText primary='223456787' primaryTypographyProps={{ style: listItemTextStyle14 }} />
        <ListItemText primary='R$ 1000,00' primaryTypographyProps={{ style: listItemTextStyle14 }} />
      </ListItem>
      <ListItem divider style={{ backgroundColor: '#FFFFFF', display: 'flex' }}>
        <ListItemText primary='Sara Silva' primaryTypographyProps={{ style: listItemTextStyle14 }} />
        <ListItemText primary='223456787' primaryTypographyProps={{ style: listItemTextStyle14 }} />
        <ListItemText primary='R$ 1000,00' primaryTypographyProps={{ style: listItemTextStyle14 }} />
      </ListItem>
      <ListItem divider style={{ backgroundColor: '#FFFFFF', display: 'flex' }}>
        <ListItemText primary='Sara Silva' primaryTypographyProps={{ style: listItemTextStyle14 }} />
        <ListItemText primary='223456787' primaryTypographyProps={{ style: listItemTextStyle14 }} />
        <ListItemText primary='R$ 1000,00' primaryTypographyProps={{ style: listItemTextStyle14 }} />
      </ListItem>
      <ListItem divider style={{ backgroundColor: '#FFFFFF', display: 'flex' }}>
        <ListItemText primary='Sara Silva' primaryTypographyProps={{ style: listItemTextStyle14 }} />
        <ListItemText primary='223456787' primaryTypographyProps={{ style: listItemTextStyle14 }} />
        <ListItemText primary='R$ 1000,00' primaryTypographyProps={{ style: listItemTextStyle14 }} />
      </ListItem>
      <ListItem style={{ backgroundColor: '#FFFFFF', borderRadius: '0 0 30px 30px', boxShadow: '0px 4px 4px #ACD9C540', display: 'flex', justifyContent: 'center' }}>
        <a style={{ color: '#DA0175' }} href='url'>Ver todos</a>
      </ListItem>
    </List>
  );
}