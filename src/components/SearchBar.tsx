import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

const SearchBar = ({}) => {
  const [searchText, setSearchText] = useState('');
  const {colors} = useTheme();

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
  },
  searchText: {
    flex: 1,
    height: 40,
    padding: 10,
  },
  searchIconContainer: {
    marginRight: 10,
  },
  searchIconLogo: {
    backgroundColor: '#FFFFFF',
  },
});

export default SearchBar;
