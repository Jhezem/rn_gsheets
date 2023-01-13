import Form from '../components/Form/Form';
import {ScrollView} from 'native-base';
import {getFormInputs} from '../utils/formInputs';
import {usePostBooks} from '../hooks/useBooks';
import Spinner from '../components/Loading/Spinner';
import { useEffect } from 'react';

export default function UpdateBook({route, navigation}) {
  const {mutate, isLoading: isUpading, isSuccess} = usePostBooks();
  const {book} = route.params;

  useEffect(() => {
    if(isSuccess){
      navigation.navigate('Libros');
    }
   }, [isSuccess]);

  if (isUpading) {
    return <Spinner text={'Actualizando'} color={'blue'} textColor={'blue'} />;
  }

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
