// CardGeneric.jsx
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';

const style = {
  width: '100%',
  bgcolor: 'background.paper',
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

export default function CardResume ({ icon, title, value, backgroundColor }) {
  return (
    <List sx={style} component='nav' aria-label='mailbox folders' style={{ backgroundColor: backgroundColor, borderRadius: '30px' }}>
      <ListItem style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <img src={icon} alt='' style={{ marginRight: '25px' }} />
        <Box display='flex' flexDirection='column' margin='10px' alignItems='center'>
          <ListItemText primary={title} primaryTypographyProps={{ style: listItemTextStyle }} />
          <ListItemText primary={`${value}`} primaryTypographyProps={{ style: listItemTextStyleSecond }} />
        </Box>
      </ListItem>
    </List>
  );
}