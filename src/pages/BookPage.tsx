import {Image, Text, View} from 'react-native';
import {BookPageProps} from '../types/types';

const BookPage = ({route}: BookPageProps) => {
  const book = route.params.bookDetails;
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
    </View>
  );
};

export default BookPage;
