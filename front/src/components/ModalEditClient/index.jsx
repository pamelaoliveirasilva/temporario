import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '30vw',
  height: '70vh',
  bgcolor: 'background.paper',
  borderRadius: '25px',
  boxShadow: 24,
  p: 6,
};

const closeIconStyle = {
  position: 'absolute',
  top: '16px',
  right: '16px',
  color: 'rgba(0, 0, 0, 0.6)',
};

const textFieldStyle = {
  width: '100%',
  marginBottom: '16px',
};

const buttonStyle = {
  display: 'block',
  margin: '0 auto',
};

const validationSchema = yup.object().shape({
  name: yup.string().required('Esse campo deve ser preenchido'),
  cpf: yup.string().required('Esse campo deve ser preenchido'),
  email: yup.string().email('E-mail inválido').required('Esse campo deve ser preenchido'),
  phone: yup.string(),
  password: yup.string().required('Esse campo deve ser preenchido'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'As senhas devem ser iguais'),
});

export default function ModalEditClient({ open, handleClose }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={closeIconStyle}
          >
            <CloseIcon />
          </IconButton>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <Box>
              Edite seu cadastro
            </Box>
          </Typography>
          <Formik
            initialValues={{
              name: '',
              cpf: '',
              email: '',
              phone: '',
              password: '',
              confirmPassword: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
              handleClose();
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Field
                  as={TextField}
                  label="Nome"
                  variant="outlined"
                  style={textFieldStyle}
                  name="name"
                  required
                  placeholder='Digite seu nome'
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                />
                <Field
                  as={TextField}
                  label="E-mail"
                  variant="outlined"
                  style={textFieldStyle}
                  name="email"
                  required
                  placeholder='Digite seu e-mail'
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
                <Box display="flex">
                  <Field
                    as={TextField}
                    label="CPF"
                    variant="outlined"
                    style={{ ...textFieldStyle, marginRight: '8px' }}
                    name="cpf"
                    placeholder='Digite seu CPF'
                  />
                  <Field
                    as={TextField}
                    label="Telefone"
                    variant="outlined"
                    style={textFieldStyle}
                    name="phone"
                    placeholder='Digite seu telefone'
                  />
                </Box>
                <Field
                  as={TextField}
                  label="Senha"
                  variant="outlined"
                  style={textFieldStyle}
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder='Digite sua senha'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={togglePasswordVisibility}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
                <Field
                  as={TextField}
                  label="Confirmar Senha"
                  variant="outlined"
                  style={textFieldStyle}
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  required
                  placeholder='Confirme sua senha'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle confirm password visibility"
                          onClick={toggleConfirmPasswordVisibility}
                          edge="end"
                        >
                          {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                  helperText={touched.confirmPassword && errors.confirmPassword}
                />
                <Button
                  type="submit"
                  variant="contained"
                  style={buttonStyle}
                >
                  Validar
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </div>
  );
}
