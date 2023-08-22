import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {MyDefaultTheme} from '../utils/Theme';
import {useSelector} from 'react-redux';
import {RootState} from '../store/Store';
import Book from './Book';
import {BooksLineUpProps} from '../types/types';
import useViewAll from '../hooks/useViewAll';
import React from 'react';

const BooksLineUp = ({title, booksToShow}: BooksLineUpProps) => {
  const {status} = useSelector((state: RootState) => state.booksFromApi);
  const gotToViewAll = useViewAll();
  return (
    <View style={styles.lineUpParent}>
      <View style={styles.lineUpBooks}>
        <Text style={[styles.bookTitle, {color: MyDefaultTheme.colors.text}]}>
          {title}
        </Text>
        <TouchableOpacity onPress={gotToViewAll}>
          <Text
            style={[styles.showMore, {color: MyDefaultTheme.colors.primary}]}>
            View all
          </Text>
        </TouchableOpacity>
      </View>

      {status === 'pending' && (
        <ActivityIndicator style={styles.loading} size={'large'} animating />
      )}
      {status === 'succeeded' && (
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={booksToShow}
          renderItem={item => {
            return <Book book={item.item} />;
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  lineUpParent: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  lineUpBooks: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  bookTitle: {
    fontSize: 18,
  },
  showMore: {
    textAlignVertical: 'center',
  },
  loading: {height: 200},
});

export default BooksLineUp;
