import {Button, Text, View} from 'react-native';
import {useAuth0} from 'react-native-auth0';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../store/Store';
import {setLoggedOut, setUserLoading} from '../store/features/userAuthSlice';

const ProfileScreen = () => {
  const {authorize, user, clearSession} = useAuth0();
  const dispatch = useDispatch<AppDispatch>();

  const logOut = async () => {
    try {
      dispatch(setUserLoading());
      await clearSession();
      dispatch(setLoggedOut());
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View>
      <Button onPress={logOut} title="log out"></Button>
    </View>
  );
};

export default ProfileScreen;
