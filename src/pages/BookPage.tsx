import {Button, Image, Text, View} from 'react-native';
import {BookPageProps} from '../types/types';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../store/Store';
import {
  addtoBookmark,
  getBookmarked,
  removeFromBookmark,
} from '../store/features/bookmarkSlice';

const BookPage = ({route}: BookPageProps) => {
  const book = route.params.bookDetails;
  const dispatch = useDispatch<AppDispatch>();
  const {bookmarked} = useSelector((state: RootState) => state.bookmark);

  const isBookmarked =
    bookmarked.filter(bookM => bookM.isbn13 === book.isbn13).length > 0;
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginVertical: 20,
        justifyContent: 'center',
      }}>
      <Image
        style={{width: 300, height: 300, alignSelf: 'center'}}
        source={{uri: book.image}}></Image>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 28,
          marginHorizontal: 20,
          textAlign: 'center',
        }}>
        {book.title}
      </Text>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 16,
          marginHorizontal: 20,
          textAlign: 'center',
        }}>
        {book.price}
      </Text>

      <Button
        onPress={() => {
          // dispatch(addtoBookmark(book));
          dispatch(addtoBookmark(book));
        }}
        title="addddd"></Button>
      {isBookmarked && (
        <Button
          onPress={() => {
            // dispatch(addtoBookmark(book));
            dispatch(removeFromBookmark(book));
          }}
          title="remove"></Button>
      )}
    </View>
  );
};

export default BookPage;
