import {useState} from 'react';

export const useForm = data => {
  const [formData, setFormData] = useState(data || []);

  const validateForm = () => {
    if (formData.length === 0) return false;
    return formData.every(({value}) => value.length > 0);
  };

  return {setFormData, formData, validateForm};
};