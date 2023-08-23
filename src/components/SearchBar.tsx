import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useTheme} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../store/Store';
import SearchResult from './SearchResult';
import {BasicBookDetails} from '../types/types';

const SearchBar = ({}) => {
  const [searchText, setSearchText] = useState('');
  const [filteredBooks, setFilteredBooks] = useState<BasicBookDetails[]>([]);
  const {colors} = useTheme();

  const {status, response} = useSelector(
    (state: RootState) => state.booksFromApi,
  );

  useEffect(() => {
    const filtered = response.books.filter(book =>
      book.title.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredBooks(filtered);
  }, [searchText, response.books]);

  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        style={styles.searchText}
        placeholderTextColor={colors.text}
        placeholder="Search..."
        value={searchText}
        onChangeText={setSearchText}
      />
      <TouchableOpacity style={styles.searchIconContainer}>
        <FontAwesomeIcon
          style={styles.searchIconLogo}
          icon={faSearch}
          size={20}
          color={colors.primary}
        />
      </TouchableOpacity>

      <ScrollView style={styles.searchResults}>
        {status === 'succeeded' && (
          <>
            {filteredBooks.length > 0 &&
              searchText !== '' &&
              filteredBooks
                .map(book => {
                  return <SearchResult key={book.isbn13} book={book} />;
                })
                .slice(0, 6)}
          </>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 50,
    marginHorizontal: 10,
    marginVertical: 20,
    position: 'relative',
    zIndex: 2,
    justifyContent: 'space-between',
  },
  searchText: {
    flex: 1,
    height: 40,
    padding: 10,
    maxWidth: '70%',
  },
  searchIconContainer: {
    marginRight: 10,
  },
  searchIconLogo: {
    backgroundColor: '#FFFFFF',
  },
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
  outsideClickContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 700,
    height: 700,
    backgroundColor: 'red',
  },
});

export default SearchBar;
