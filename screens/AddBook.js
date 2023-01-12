import Form from '../components/Form/Form';
import {ScrollView} from 'native-base';
import {getFormInputs} from '../utils/formInputs';
import { usePostBooks } from '../hooks/useBooks';

export default function AddBook() {
  const {mutate} = usePostBooks();
  
  const agregar = formData => {
    const libroData = {
      action: 'add',
      collection: 'books',
      data: formData,
    };
    mutate(libroData);
  };

  return (
    <ScrollView w={'100%'} h={'100%'}>
      <Form
        inputs={getFormInputs()}
        title={'Agregar Libro'}
        onSubmit={formData => agregar(formData)}
      />
    </ScrollView>
  );
}
