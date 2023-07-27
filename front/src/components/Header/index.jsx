import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import UserAvatar from '../Avatar';
import Box from '@mui/material/Box';
import MenuUser from '../MenuUser';

const style = {
  width: '105%',
  bgcolor: '#F8F8F9',
};

const headerTextStyle = {
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '26px',
  color: '#343447',
};

const listItemTextStyle = {
  fontFamily: 'Nunito, sans-serif',
  fontSize: '18px',
  color: '#0E8750',
  lineHeight: '44px',
  fontWidht: 'bold'
};

export default function Header() {
  return (
    <List sx={style} aria-label='mailbox folders'>
      <ListItem sx={{ padding: '5px 50px 10px 50px'}}>
        <ListItemText primary='Resumo das cobranças' primaryTypographyProps={{ sx: headerTextStyle }} />
        <Box sx={{display:'flex', flexDirection:'row'}}>
          <UserAvatar/>
          <span style={{...listItemTextStyle, marginLeft:'10px'}}>Lorena</span>
          <MenuUser/>
        </Box>
      </ListItem>
      <Divider sx={{border:'solid 1px #ACD9C5'}}/>
    </List>
  );
}