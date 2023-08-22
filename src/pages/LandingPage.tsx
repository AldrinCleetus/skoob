import {ScrollView, StyleSheet} from 'react-native';
import LandingNavBar from '../components/LandingNavBar';
import BooksLineUp from '../components/BooksLineUp';
import {LandingPageProps} from '../types/types';
import {useSelector} from 'react-redux';
import {RootState} from '../store/Store';

const LandingPage = ({navigation, route}: LandingPageProps) => {
  const {response, status} = useSelector(
    (state: RootState) => state.booksFromApi,
  );

  return (
    <ScrollView style={styles.landingView}>
      <LandingNavBar></LandingNavBar>
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
