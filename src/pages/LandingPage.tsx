import {Alert, BackHandler, ScrollView, StyleSheet} from 'react-native';
import LandingNavBar from '../components/LandingNavBar';
import BooksLineUp from '../components/BooksLineUp';
import {LandingPageProps} from '../types/types';
import {useSelector} from 'react-redux';
import {RootState} from '../store/Store';
import SearchBar from '../components/SearchBar';
import {useBackHandler} from '../hooks/useBackHandler';
import {useEffect} from 'react';

const LandingPage = ({navigation, route}: LandingPageProps) => {
  const {response, status} = useSelector(
    (state: RootState) => state.booksFromApi,
  );

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to exit', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <ScrollView style={styles.landingView}>
      <LandingNavBar></LandingNavBar>
      <SearchBar></SearchBar>
      <BooksLineUp
        title="New Arrival"
        booksToShow={response.books.slice(0, 6)}></BooksLineUp>
      <BooksLineUp
        title="Continue Reading"
        booksToShow={response.books.slice(6, 10)}></BooksLineUp>
      <BooksLineUp
        title="Popular"
        booksToShow={response.books.slice(10, 15)}></BooksLineUp>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  landingView: {
    marginBottom: 60,
  },
});

export default LandingPage;
