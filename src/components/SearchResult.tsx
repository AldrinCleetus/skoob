import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {BasicBookDetails} from '../types/types';
import useGoToBook from '../hooks/useGoToBook';

export type SearchResultProps = {
  book: BasicBookDetails;
};

const SearchResult = ({book}: SearchResultProps) => {
  const {colors} = useTheme();
  const openThisBook = useGoToBook(book);

  return (
    <TouchableOpacity onPress={openThisBook}>
      <View style={styles.searchResultItemContainer}>
        <Text style={[styles.searchText, {color: colors.text}]}>
          {book.title}
        </Text>
        <FontAwesomeIcon
          style={styles.searchResultItemIcon}
          size={20}
          icon={faArrowRight}
          color={colors.text}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  searchResults: {
    position: 'absolute',
    backgroundColor: 'black',
    width: '100%',
    top: 50,
    left: 10,
    borderRadius: 20,
  },
  searchResultItemContainer: {
    height: 'auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  searchResultItemTitle: {
    fontSize: 16,
  },
  searchResultItemIcon: {
    alignSelf: 'center',
    marginRight: 20,
  },
  searchText: {
    flex: 1,
    height: 40,
    padding: 10,
    maxWidth: '70%',
  },
});

export default SearchResult;
