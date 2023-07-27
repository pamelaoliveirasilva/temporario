import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Chips from '../Chips';
import IconDefaulterClients from '../../assets/IconDefaulterClients.svg';

const style = {
  width: '100%',
  bgcolor: '#F8F8F9',
};

const listItemTextStyle = {
  fontFamily: 'Montserrat, sans-serif',
  color: '#3F3F55',
  flex: '0 0 80%',
};

const listItemTextStyle14 = {
  fontFamily: 'Nunito, sans-serif',
  fontSize: '14px',
  color: '#6E6E85',
  flex: '0 0 20%',
};

export default function CardDefaultedCustomers() {
  return (
    <List sx={style} component='nav' aria-label='mailbox folders'>
      <ListItem style={{ backgroundColor: '#FFFFFF', borderRadius: '30px 30px 0 0', color: '#3F3F55', fontWeight: 'bold', padding:'15px 0x 15px 0' }}>
        <img src={IconDefaulterClients} alt='' />
        <ListItemText primary='Clientes Inadimplentes' primaryTypographyProps={{ style:{...listItemTextStyle, fontSize:'23px'}}} />
        <Chips bcColor='#FFEFEF' txColor='#971D1D' />
      </ListItem>
      <Divider sx={{ backgroundColor: 'transparent' }} />
      <ListItem divider style={{ backgroundColor: '#FFFFFF', color: '#3F3F55', fontWeight: 'bold', fontSize: '70px' }}>
        <ListItemText style={{ fontSize: '30px' }} primary='Cliente' />
        <ListItemText primary='ID da cob.' primaryTypographyProps={{ style:{...listItemTextStyle, fontSize:'18px'}}} />
        <ListItemText primary='Valor' primaryTypographyProps={{ style:{...listItemTextStyle, fontSize:'18px'}}} />
      </ListItem>
      <Divider sx={{ backgroundColor: 'transparent' }} />
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
        <a style={{ display: 'block', textAlign: 'center', color: '#DA0175' }} href='url'>Ver todos</a>
      </ListItem>
    </List>
  );
}