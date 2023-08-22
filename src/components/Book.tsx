import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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
        openThisBook();
      }}>
      <View style={[styles.bookParent, {backgroundColor: colors.card}]}>
        <Image
          style={styles.bookThumbnail}
          source={{
            uri: book.image,
          }}></Image>
        <Text style={[styles.bookTitle, {color: MyDefaultTheme.colors.text}]}>
          {book.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bookParent: {
    height: 230,
    width: 150,
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    paddingHorizontal: 6,
    paddingVertical: 8,
  },
  bookThumbnail: {
    objectFit: 'cover',
    borderRadius: 5,
    width: '100%',
    height: '80%',
  },
  bookTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 6,
  },
});

export default Book;
