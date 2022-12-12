import { useState } from 'react';
import { omit } from 'lodash';

const useForm = (formLogin) => {
  //Form values
  const [values, setValues] = useState({});
  //Errors
  const [errors, setErrors] = useState({});

  const validate = (event, name, value) => {
    switch (name) {
      case 'personName':
        if (value.length <= 4) {
          
          setErrors({
            ...errors,
            personName: 'Username atleast have 5 letters',
          });
        } else {
          let newObj = omit(errors, 'personName');
          setErrors(newObj);
        }
        break;

      case 'email':
        if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            email: 'Enter a valid email address',
          });
        } else {
          let newObj = omit(errors, 'email');
          setErrors(newObj);
        }
        break;

        // case "phone":
        //     if(){

        //     }else{

        //     }
        //     break;
      default:
        break;
    }
  };

  //handle form inputs
  const handleChange = (event) => {
    //To stop default events
    // event.persist();

    let name = event?.target?.name;
    let val = event?.target?.value;

    validate(event, name, val);
    setValues({
      ...values,
      [name]: val,
    });
  };
  const handleSubmit = (e) => {
    if (e && e.preventDefault) { e.preventDefault(); }
    // if (event) event.preventDefault();

    if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      formLogin();
    } else {
      alert('There is an Error!');
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;