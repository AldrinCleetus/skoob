import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {MyDefaultTheme} from '../utils/Theme';
import {useSelector} from 'react-redux';
import {RootState} from '../store/Store';
import Book from './Book';
import {BooksLineUpProps} from '../types/types';

const BooksLineUp = ({title, booksToShow}: BooksLineUpProps) => {
  const {status} = useSelector((state: RootState) => state.booksFromApi);
  return (
    <View style={{marginHorizontal: 10, marginTop: 10}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignContent: 'center',
        }}>
        <Text style={{fontSize: 16, color: MyDefaultTheme.colors.text}}>
          {title}
        </Text>
        <TouchableOpacity onPress={() => console.log('hola')}>
          <Text
            style={{
              color: MyDefaultTheme.colors.primary,
              textAlignVertical: 'center',
            }}>
            View all {'->'}
          </Text>
        </TouchableOpacity>
      </View>
      {status === 'succeeded' && (
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={booksToShow}
          renderItem={item => {
            return <Book book={item.item}></Book>;
          }}></FlatList>
      )}
    </View>
  );
};

export default BooksLineUp;
