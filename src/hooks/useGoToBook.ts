import {useNavigation} from '@react-navigation/native';
import {BasicBookDetails, HomeNavigation} from '../types/types';

const useGoToBook = (book: BasicBookDetails) => {
  const navigator = useNavigation<HomeNavigation>();

  const goToBook = () => {
    navigator.navigate('Book', {
      bookDetails: book,
    });
  };

  return goToBook;
};

export default useGoToBook;
