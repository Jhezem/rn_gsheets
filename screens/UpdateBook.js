import Form from '../components/Form/Form';
import {ScrollView} from 'native-base';
import {getFormInputs} from '../utils/formInputs';
import {usePostBooks} from '../hooks/useBooks';

export default function UpdateBook({route}) {
  const {mutate} = usePostBooks();
  const {book} = route.params;

  const actualizar = (formatData, id) => {
    const libroData = {
      id: id,
      action: 'update',
      collection: 'books',
      data: formatData,
    };
    mutate(libroData);
  };

  return (
    <ScrollView w={'100%'} h={'100%'}>
      <Form
        inputs={getFormInputs(book)}
        title={'Actualizar Libro'}
        onSubmit={formData => actualizar(formData, book.id)}
      />
    </ScrollView>
  );
}
