import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../store/Store';
import {MyDefaultTheme} from '../utils/Theme';
import Book from '../components/Book';

const BookmarkedBooksPage = () => {
  const {bookmarked} = useSelector((state: RootState) => state.bookmark);

  return (
    <View>
      <Text
        style={[styles.bookmarkTitle, {color: MyDefaultTheme.colors.primary}]}>
        Bookmarked Books
      </Text>

      {bookmarked.length > 0 && (
        <FlatList
          columnWrapperStyle={styles.booksContainer}
          numColumns={2}
          data={bookmarked}
          renderItem={item => {
            return <Book book={item.item} />;
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  bookmarkTitle: {
    textAlign: 'left',
    marginHorizontal: 20,
    fontSize: 26,

    fontWeight: 'bold',
    marginTop: 20,
  },
  booksContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
});

export default BookmarkedBooksPage;
