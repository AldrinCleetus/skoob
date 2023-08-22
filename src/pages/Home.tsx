import {FlatList, ScrollView} from 'react-native';
import Book from '../components/Book';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState, useAppDispatch} from '../store/Store';
import {useEffect} from 'react';
import {getNewBooksFromAPI} from '../store/features/bookSlice';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingNavBar from '../components/LandingNavBar';
import BooksLineUp from '../components/BooksLineUp';
import {HomeTabParamList, LandingPageProps} from '../types/types';
import BookPage from './BookPage';
import {AnyAction} from '@reduxjs/toolkit';
import LandingPage from './LandingPage';

const Home = () => {
  const {response, status} = useSelector(
    (state: RootState) => state.booksFromApi,
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch<any>(getNewBooksFromAPI());
  }, []);

  const Stack = createNativeStackNavigator<HomeTabParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Landing" component={LandingPage} />
      <Stack.Screen name="Book" component={BookPage} />
    </Stack.Navigator>
  );
};

export default Home;
