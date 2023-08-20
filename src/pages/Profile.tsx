import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {useAuth0} from 'react-native-auth0';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../store/Store';
import {setLoggedOut, setUserLoading} from '../store/features/userAuthSlice';
import {capitalizeFirstLetter} from '../utils/helper';
import UserStats from '../components/UserStats';
import {useTheme} from '@react-navigation/native';

const ProfileScreen = () => {
  const {authorize, user, clearSession} = useAuth0();
  const dispatch = useDispatch<AppDispatch>();

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
      <UserStats />
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
});

export default ProfileScreen;
