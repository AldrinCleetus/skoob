import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useAuth0} from 'react-native-auth0';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../store/Store';
import {setLoggedOut} from '../store/features/userAuthSlice';
import {capitalizeFirstLetter} from '../utils/helper';
import UserStats from '../components/UserStats';
import {useTheme} from '@react-navigation/native';
import React from 'react';

const ProfileScreen = () => {
  const {user, clearSession} = useAuth0();
  const dispatch = useDispatch<AppDispatch>();
  const {bookmarked} = useSelector((state: RootState) => state.bookmark);

  const {colors} = useTheme();

  const logOut = async () => {
    try {
      // dispatch(setUserLoading());
      await clearSession();
      dispatch(setLoggedOut());
    } catch (e) {
      console.log(e);
    }
  };

  if (!user) {
    return <View />;
  }

  return (
    <View style={styles.container}>
      <Image source={{uri: user?.picture}} style={styles.profileImage} />
      <Text style={[styles.name, {color: colors.text}]}>
        {user?.nickname && capitalizeFirstLetter(user.nickname)}
      </Text>
      <Text style={styles.bio}>{user?.email}</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
        sagittis eros, sit amet tristique justo.
      </Text>
      <UserStats
        statOne={{title: 'Currently Reading', value: 13}}
        statTwo={{title: 'Finished Reading', value: 23}}
        statThree={{title: 'Bookmarked', value: bookmarked.length}}
      />
      <TouchableOpacity
        onPress={logOut}
        style={[styles.logOutContainer, {backgroundColor: colors.primary}]}>
        <Text style={styles.logOutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bio: {
    fontSize: 18,
    color: '#888',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
  },
  logOutContainer: {
    width: '80%',
    alignSelf: 'center',

    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 100,
  },
  logOutText: {
    alignSelf: 'center',
    fontSize: 22,
  },
});

export default ProfileScreen;
