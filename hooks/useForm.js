import {useState} from 'react';

export const useForm = data => {
  const [formData, setFormData] = useState(data || {});

  const validateForm = () => {
    if (Object.keys(formData).length === 0) return false;
    return Object.keys(formData).every(input => {
      return formData[input].length > 0;
    });
  };

  return {setFormData, formData, validateForm};
};