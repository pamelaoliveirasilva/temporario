import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '../../assets/EditIcon.svg';
import LogoutIcon from '../../assets/LogoutIcon.svg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Box from '@mui/material/Box';
import ModalEditClient from '../ModalEditClient';
import { logoutUser } from '../../api/api.js';

const ArrowIcon = styled((props) =>
  props.open ? <KeyboardArrowUpIcon {...props} /> : <KeyboardArrowDownIcon {...props} />
)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

const MenuUser = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [modalOpenClient, setModalOpenClient] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  }
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  }
  const handleLogout = async () => {
    setIsAuthenticated(false);
    try {
      // Enviar a solicitação de logout para o servidor usando a função logoutUser
      const response = await logoutUser(YOUR_JWT_TOKEN_HERE); // Substitua YOUR_JWT_TOKEN_HERE pelo token do usuário
  
      if (response) {
        // Logout bem-sucedido, remova o token armazenado no front-end (por exemplo, do local storage ou cookies)
        // Aqui você deve implementar a lógica para remover o token do usuário do front-end após o logout
        setIsAuthenticated(false); // Atualiza o estado isAuthenticated para deslogar o usuário
      } else {
        // Lidar com o erro de logout, se necessário
      }
    } catch (error) {
      // Lidar com o erro de conexão ou outros erros, se necessário
    }
  }
 
  const chevronStyle = {
    color: '#0E8750',
    fontSize: 24,
    verticalAlign: 'middle'
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<ArrowIcon open={open} style={chevronStyle} />}
        style={{ backgroundColor: 'transparent' }}
      >
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <Box>
            <img
              style={{ margin: '5px', cursor: 'pointer' }}
              src={EditIcon}
              alt='Edit'
              onClick={() => setModalOpenClient(true)}
            />
            <img 
              style={{ margin: '5px' }} 
              src={LogoutIcon} 
              alt='Logout'
              onClick={handleLogout} 
            />
          </Box>
        </MenuItem>
      </StyledMenu>

      <ModalEditClient open={modalOpenClient} handleClose={() => setModalOpenClient(false)} />
    </div>
  );
};

export default MenuUser;