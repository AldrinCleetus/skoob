import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../store/Store';
import Book from '../components/Book';
import {MyDefaultTheme} from '../utils/Theme';
import {BasicBookDetails} from '../types/types';

export type ViewAllBooksProps = {
  books: BasicBookDetails[];
};

const ViewAllBooks = () => {
  const {response, status} = useSelector(
    (state: RootState) => state.booksFromApi,
  );
  return (
    <View>
      <Text
        style={[
          styles.viewAllContainer,
          {color: MyDefaultTheme.colors.primary},
        ]}>
        Recommended
      </Text>
      {status === 'pending' && (
        <ActivityIndicator
          style={{alignSelf: 'center'}}
          size="large"
          color="#00ff00"
        />
      )}

      {status === 'succeeded' && (
        <FlatList
          columnWrapperStyle={styles.viewAllList}
          numColumns={2}
          data={response.books}
          renderItem={item => {
            return <Book book={item.item}></Book>;
          }}></FlatList>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  viewAllContainer: {
    textAlign: 'left',
    marginHorizontal: 20,
    fontSize: 26,

    fontWeight: 'bold',
    marginTop: 20,
  },
  viewAllList: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
});

export default ViewAllBooks;
