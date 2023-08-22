import {Alert, BackHandler, ScrollView, StyleSheet} from 'react-native';
import LandingNavBar from '../components/LandingNavBar';
import BooksLineUp from '../components/BooksLineUp';
import {LandingPageProps} from '../types/types';
import {useSelector} from 'react-redux';
import {RootState} from '../store/Store';
import SearchBar from '../components/SearchBar';
import {useEffect} from 'react';
import React from 'react';

const LandingPage = ({navigation}: LandingPageProps) => {
  const {response} = useSelector((state: RootState) => state.booksFromApi);

  useEffect(() => {
    const backAction = () => {
      if (navigation.getState().index) {
        return false;
      }

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScrollView style={styles.landingView}>
      <LandingNavBar />
      <SearchBar />
      <BooksLineUp
        title="New Arrival"
        booksToShow={response.books.slice(0, 6)}
      />
      <BooksLineUp
        title="Continue Reading"
        booksToShow={response.books.slice(6, 10)}
      />
      <BooksLineUp title="Popular" booksToShow={response.books.slice(10, 15)} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  landingView: {
    marginBottom: 60,
  },
});

export default LandingPage;
