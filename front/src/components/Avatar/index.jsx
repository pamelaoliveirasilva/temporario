import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function stringToColor(string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
      fontFamily: 'Nunito, sans-serif',
      fontSize: '22px',
      color: '#0E8750',
      backgroundColor: '#DEDEE9',
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

export default function UserAvatar() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar {...stringAvatar('Lorena Rocha')} />
    </Stack>
  );
}