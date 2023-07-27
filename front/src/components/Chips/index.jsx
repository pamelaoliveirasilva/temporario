import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function Chips({bcColor, txColor}) {
  const quantity = 4;
  const style = {
    width:'45px', 
    height:'20px', 
    borderRadius:'7px', 
    backgroundColor:bcColor, 
    fontWeight:'bold', 
    color:txColor
  }
  return (
    <Stack direction='row' spacing={1}>
      <Chip label={quantity} size='small' style={style} />
    </Stack>
  );
}