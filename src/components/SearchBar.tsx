import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';

const SearchBar = ({}) => {
  const [searchText, setSearchText] = useState('');
  const {colors} = useTheme();

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 50,
        marginHorizontal: 10,
        marginVertical: 20,
      }}>
      <TextInput
        style={{
          flex: 1,
          height: 40,
          padding: 10,
        }}
        placeholderTextColor={colors.text}
        placeholder="Search..."
        value={searchText}
        onChangeText={setSearchText}
      />
      <TouchableOpacity style={{marginRight: 10}}>
        <FontAwesomeIcon
          style={{backgroundColor: '#FFFFFF'}}
          icon={faSearch}
          size={20}
          color={colors.primary}></FontAwesomeIcon>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
