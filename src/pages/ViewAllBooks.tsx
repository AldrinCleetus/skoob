import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../store/Store';
import Book from '../components/Book';
import {MyDefaultTheme} from '../utils/Theme';

const ViewAllBooks = () => {
  const {response, status} = useSelector(
    (state: RootState) => state.booksFromApi,
  );
  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 32,
          color: MyDefaultTheme.colors.primary,
          fontWeight: '300',
          marginTop: 20,
        }}>
        Recommended
      </Text>
      {status === 'pending' && (
        <ActivityIndicator size="large" color="#00ff00" />
      )}

      {status === 'succeeded' && (
        <FlatList
          columnWrapperStyle={{flex: 1, justifyContent: 'space-evenly'}}
          numColumns={2}
          data={response.books}
          renderItem={item => {
            return <Book book={item.item}></Book>;
          }}></FlatList>
      )}
    </View>
  );
};

export default ViewAllBooks;
