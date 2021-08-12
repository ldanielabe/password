// Dependecies
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { reject } from 'lodash';
import moment from 'moment';

function useFormulary() {

  const [values, setValues] = React.useState({
    password: ''
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const generateKey = () => {
    setValues({password: (Math.random() + 1).toString(36).substring(7), showPassword: true});
  }
  
  const copyKey = () => {
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
  }

 
 // Form 

 const {
  register,
  handleSubmit,
  errors,
  formState,
  unregister,
  setValue,
  getValues,
  reset,
  setError,
  clearError,
  control, 
  watch
} = useForm({
  mode: "onBlur",
  reValidateMode: "onBlur",
  shouldUnregister: true
  });  

  const onSubmit = async (data) => {
    data.password = values.password;
    data.created_at = moment().format('YYYY-MM-DD h:mm:ss');

    console.log("data", JSON.stringify(data));
    try {
        const options = {
          method: 'POST',
          body: JSON.stringify(data,),
          headers: {
            'Content-Type': 'application/json',
          },
        };

        // Insert new job request
        const response = await fetch('http://localhost:3000/passwords', options);
        const res = await response.json();

        if (res.status === 200) {
          setSuccessfully(true); 
        } else {
          setMessageError(true);
        }
    } catch (e) {
      reject();
    }
  };
  return { 
    values,
    onSubmit, 
    handleChange,
    handleClickShowPassword,
    handleMouseDownPassword,
    register,
    handleSubmit,
    errors,
    generateKey,
    copyKey
  };
}

export default useFormulary;
