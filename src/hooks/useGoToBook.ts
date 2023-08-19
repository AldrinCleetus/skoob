import {useNavigation} from '@react-navigation/native';
import {BasicBookDetails, HomeNavigation} from '../types/types';

export const useGoToBook = (book: BasicBookDetails) => {
  const navigator = useNavigation<HomeNavigation>();

  const goToBook = () => {
    navigator.navigate('Book', {
      bookDetails: book,
    });
  };

  return goToBook;
};
