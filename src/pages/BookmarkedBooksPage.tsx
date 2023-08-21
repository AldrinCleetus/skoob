import {FlatList, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../store/Store';
import {MyDefaultTheme} from '../utils/Theme';
import Book from '../components/Book';

const BookmarkedBooksPage = () => {
  const {bookmarked} = useSelector((state: RootState) => state.bookmark);

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
        Bookmarked Books
      </Text>

      {bookmarked.length > 0 && (
        <FlatList
          columnWrapperStyle={{flex: 1, justifyContent: 'space-evenly'}}
          numColumns={2}
          data={bookmarked}
          renderItem={item => {
            return <Book book={item.item}></Book>;
          }}></FlatList>
      )}
    </View>
  );
};

export default BookmarkedBooksPage;
