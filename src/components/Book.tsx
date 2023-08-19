import {Image, Text, TouchableOpacity, View} from 'react-native';
import {MyDefaultTheme} from '../utils/Theme';
import {BookProps} from '../types/types';
import useGoToBook from '../hooks/useGoToBook';
import {useTheme} from '@react-navigation/native';

const Book = ({book}: BookProps) => {
  const {colors} = useTheme();
  const openThisBook = useGoToBook(book);

  return (
    <TouchableOpacity
      onPress={() => {
        console.log('huh');
        openThisBook();
      }}>
      <View
        style={{
          height: 230,
          width: 150,
          margin: 10,
          display: 'flex',
          justifyContent: 'center',
          borderRadius: 10,
          overflow: 'hidden',
          paddingHorizontal: 6,
          paddingVertical: 8,
          backgroundColor: colors.card,
        }}>
        <Image
          style={{
            objectFit: 'cover',
            borderRadius: 5,
            width: '100%',
            height: '80%',
          }}
          source={{
            uri: book.image,
          }}></Image>
        <Text
          style={{
            color: MyDefaultTheme.colors.text,
            fontSize: 12,
            fontWeight: 'bold',
            marginTop: 6,
          }}>
          {book.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Book;
