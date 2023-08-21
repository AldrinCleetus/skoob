import {FlatList, ScrollView} from 'react-native';
import Book from '../components/Book';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../store/Store';
import {useEffect} from 'react';
import {getNewBooksFromAPI} from '../store/features/bookSlice';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingNavBar from '../components/LandingNavBar';
import BooksLineUp from '../components/BooksLineUp';
import {HomeTabParamList, LandingPageProps} from '../types/types';
import BookPage from './BookPage';
import {getBookmarked} from '../store/features/bookmarkSlice';

const Home = () => {
  const {response, status} = useSelector(
    (state: RootState) => state.booksFromApi,
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getNewBooksFromAPI());
    dispatch(getBookmarked());
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

const Test = () => {
  const {response, status} = useSelector(
    (state: RootState) => state.booksFromApi,
  );
  return (
    <FlatList
      columnWrapperStyle={{flex: 1, justifyContent: 'space-evenly'}}
      numColumns={2}
      data={response.books}
      renderItem={item => {
        return <Book book={item.item}></Book>;
      }}></FlatList>
  );
};

const LandingPage = ({navigation, route}: LandingPageProps) => {
  const {response, status} = useSelector(
    (state: RootState) => state.booksFromApi,
  );

  return (
    <ScrollView>
      <LandingNavBar></LandingNavBar>
      <BooksLineUp
        title="New Arrival"
        booksToShow={response.books.slice(0, 6)}></BooksLineUp>
      <BooksLineUp
        title="Continue Reading"
        booksToShow={response.books.slice(6, 10)}></BooksLineUp>
    </ScrollView>
  );
};

export default Home;
