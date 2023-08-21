import * as React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  useTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Button,
  ColorSchemeName,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from './src/types/types';
import Home from './src/pages/Home';
import ProfileScreen from './src/pages/Profile';
import {MyDarkTheme, MyDefaultTheme} from './src/utils/Theme';
import {Provider, useSelector} from 'react-redux';
import Store, {RootState} from './src/store/Store';
import ViewAllBooks from './src/pages/ViewAllBooks';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBook,
  faBookBookmark,
  faBookOpen,
  faHome,
  faMugSaucer,
  faPerson,
  faUser,
  faUserAlt,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import AuthenticationPage from './src/pages/AuthenticationPage';
import {Auth0Provider, useAuth0} from 'react-native-auth0';
import {CLIENT_ID, DOMAIN_ID} from './src/utils/contants';
import InitialPage from './src/pages/InitialPage';
import {PersistGate} from 'redux-persist/integration/react';

import {persistStore} from 'redux-persist';
let persistor = persistStore(Store);

function App() {
  const colorScheme: ColorSchemeName = useColorScheme();
  const {colors} = useTheme();
  const {user} = useAuth0();
  return (
    <Auth0Provider domain={DOMAIN_ID} clientId={CLIENT_ID}>
      <Provider store={Store}>
        <PersistGate loading={null} persistor={persistor}>
          <InitialPage></InitialPage>
        </PersistGate>
      </Provider>
    </Auth0Provider>
  );
}

export default App;
