import Form from '../components/Form/Form';
import {ScrollView} from 'native-base';
import {getFormInputs} from '../utils/formInputs';
import {usePostBooks} from '../hooks/useBooks';
import {Spinner} from '../components/Loading/Spinner';

export default function AddBook() {
  const {mutate, isLoading: isAdding} = usePostBooks();

  if (isAdding) {
    return <Spinner text={'Agregando'} color={'blue'} textColor={'blue'} />;
  }

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
