// Dependencies
import { useState, useEffect } from 'react';

// Hook
import useForm from '../useForm';

function useCard() {
  const [passwords, setPasswords] = useState([]);

  useEffect(() => {
    const getPass = async () => {
      const response = await fetch(`http://localhost:3000/passwords`);
      const newPass = await response.json();
      if (response.status === 200) {
        setPasswords(newPass);
      }
    };
    getPass();
  }, [passwords]);

  function search(input) {
    let pass = [];
    if (input){
      passwords ? passwords.map((password) => (
        password.name== input ? pass.add(password) : ''
      )) : '';
      setPasswords(pass);
    }
  }

  return { passwords, search };
}

export default useCard;
