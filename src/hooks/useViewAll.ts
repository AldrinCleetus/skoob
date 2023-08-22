import {useNavigation} from '@react-navigation/native';
import {BasicBookDetails, HomeNavigation} from '../types/types';

const useViewAll = () => {
  const navigator = useNavigation<HomeNavigation>();

  const gotToViewAll = () => {
    navigator.navigate('ViewAll');
  };

  return gotToViewAll;
};

export default useViewAll;
