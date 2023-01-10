import {Box, ScrollView} from 'native-base';
import {RefreshControl} from 'react-native';
import BookCard from '../components/BookCard';
import {useFetchBooks} from '../hooks/useBooks';
import MySkeleton from '../components/Skeleton';
import PlusButton from '../components/PlusButton';

export default function Home({navigation}) {
  const {isFetching, data, refetch} = useFetchBooks();

  const handleRefetch = () => refetch();

  return (
    <Box flex={1} backgroundColor={'violet.400'} py={5}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        refreshControl={
          <RefreshControl onRefresh={handleRefetch} refreshing={isFetching} />
        }>
        {isFetching ? (
          <Box>
            <MySkeleton /> <MySkeleton />
          </Box>
        ) : (
          <BookCard libros={data} />
        )}
      </ScrollView>
      <PlusButton navigation={navigation} screen={'AddBook'} help={'Agregar Libro'}/>
    </Box>
  );
}