// components/IconButton/index.js
import React from 'react';
import IconButton from '@mui/material/IconButton';

const IconButtonWrapper = ({ icon, onClick }) => {
  return <IconButton aria-label="icon-button" onClick={onClick}>{icon}</IconButton>;
};

export default IconButtonWrapper;
