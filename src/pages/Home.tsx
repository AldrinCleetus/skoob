import {useDispatch} from 'react-redux';
import {AppDispatch} from '../store/Store';
import {useEffect} from 'react';
import {getNewBooksFromAPI} from '../store/features/bookSlice';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeTabParamList} from '../types/types';
import BookPage from './BookPage';
import LandingPage from './LandingPage';
import ViewAllBooks from './ViewAllBooks';
import React from 'react';

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch<any>(getNewBooksFromAPI());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Stack = createNativeStackNavigator<HomeTabParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Landing" component={LandingPage} />
      <Stack.Screen name="Book" component={BookPage} />
      <Stack.Screen name="ViewAll" component={ViewAllBooks} />
    </Stack.Navigator>
  );
};

export default Home;
