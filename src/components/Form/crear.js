// Dependecies
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import moment from 'moment';

// Hook
import useForm from '../../hooks/useForm';

function FormComponent(props) {
  
  const {
    values,
    onSubmit, 
    handleChange,
    handleClickShowPassword,
    handleMouseDownPassword,
    register,
    handleSubmit,
    errors
  } = useForm();


  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
    <h4>Account Name</h4>
          <TextField
            variant="outlined"
            maxRows={4}
            {...
              register(
              "account",
              { required: {
                  value: true, 
                  message: 'Campo obligatorio'
                  }, 
              maxLength: {
                  value: 50, 
                  message: 'No más de 50 carácteres!'
                  },
              minLength: {
                  value: 3, 
                  message: 'Mínimo 3 carácteres'
                  },
              pattern: {
                  value: /[a-zA-Z ]$/i,
                  message: "No se pueden ingresar caracteres."
              }})
            }
          />
          <h4>Name</h4>
          <TextField
            variant="outlined"
            maxRows={4}
            {...
              register(
              "name",
              { required: {
                  value: true, 
                  message: 'Campo obligatorio'
                  }, 
              maxLength: {
                  value: 50, 
                  message: 'No más de 50 carácteres!'
                  },
              minLength: {
                  value: 3, 
                  message: 'Mínimo 3 carácteres'
                  },
              pattern: {
                  value: /[a-zA-Z ]$/i,
                  message: "No se pueden ingresar caracteres."
              }})
            }
          />
          {/* {errors.name && <p style={{color: "red"}}>{errors.name.message}</p>} */}

          <h4>Site URL</h4>
          <TextField 
          id="standard-basic" 
          variant="outlined"
          name="url"
          {...
            register(
            "url",
            { required: {
                value: true, 
                message: 'Campo obligatorio'
                }, 
            maxLength: {
                value: 50, 
                message: 'No más de 50 carácteres!'
                },
            minLength: {
                value: 3, 
                message: 'Mínimo 3 carácteres'
                },
            pattern: {
                value: /[a-zA-Z ]$/i,
                message: "No se pueden ingresar caracteres."
            }})
          }
          />

          <h4>Password</h4>
          <FormControl className="myForm" variant="outlined">
          <OutlinedInput
            id=""
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <Button variant="outlined">Generate</Button>
        <Button variant="outlined">Copy</Button>

        <h4>Create At</h4>
          <TextField
            readonly
            variant="outlined"
            maxRows={4}
            name="create_at"
            value={moment().format('YYYY-MM-DD h:mm:ss')}
          />

        <Button size="medium" className="" variant="outlined" type="submit">
          Crear
        </Button>
    </form>
    </>
  );
}


export default FormComponent;
