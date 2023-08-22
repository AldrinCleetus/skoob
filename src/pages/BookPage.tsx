import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BookPageProps} from '../types/types';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../store/Store';
import {
  addtoBookmark,
  removeFromBookmark,
} from '../store/features/bookmarkSlice';
import {useEffect} from 'react';
import {useTheme} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBookBookmark, faStar} from '@fortawesome/free-solid-svg-icons';
import UserStats from '../components/UserStats';
import Toast from 'react-native-toast-message';
import ToggleButtonWithIcon from '../components/ToggleBookmarkButton';

const BookPage = ({route}: BookPageProps) => {
  const book = route.params.bookDetails;
  const dispatch = useDispatch<AppDispatch>();
  const {bookmarked} = useSelector((state: RootState) => state.bookmark);
  const {colors} = useTheme();

  const isBookmarked =
    bookmarked.filter(bookM => bookM.isbn13 === book.isbn13).length > 0;

  const toggleBookMark = () => {
    if (!isBookmarked) {
      dispatch(addtoBookmark(book));
      Toast.show({
        type: 'info',
        text1: 'Bookmarked Added',
        topOffset: 10,
      });
    } else {
      dispatch(removeFromBookmark(book));
      Toast.show({
        type: 'info',
        text1: 'Bookmarked removed',
        topOffset: 10,
      });
    }
  };
  return (
    <View style={styles.bookPageContainer}>
      <Image
        style={styles.bookPageThumbnail}
        source={{uri: book.image}}></Image>
      <Text style={[styles.bookPageTitle, {color: colors.primary}]}>
        {book.title}
      </Text>
      <Text style={[styles.bookPageSubTitle, {color: colors.text}]}>
        {book.subtitle}
      </Text>

      <View style={styles.ratingContainer}>
        <FontAwesomeIcon
          style={styles.ratingStarIcon}
          size={16}
          icon={faStar}
          color="#ffd700"></FontAwesomeIcon>
        <FontAwesomeIcon
          style={styles.ratingStarIcon}
          size={16}
          icon={faStar}
          color="#ffd700"></FontAwesomeIcon>
        <FontAwesomeIcon
          style={styles.ratingStarIcon}
          size={16}
          icon={faStar}
          color="#ffd700"></FontAwesomeIcon>
        <FontAwesomeIcon
          style={styles.ratingStarIcon}
          size={16}
          icon={faStar}
          color="#ffd700"></FontAwesomeIcon>
        <FontAwesomeIcon
          style={styles.ratingStarIcon}
          size={16}
          icon={faStar}
          color="grey"></FontAwesomeIcon>
        <Text style={styles.ratingAmount}>4.2 (2432)</Text>
      </View>
      <UserStats
        statOne={{title: 'Reads', value: 543}}
        statTwo={{title: 'Bookmarked', value: 23}}
        statThree={{title: 'Reviews', value: 424}}
      />

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 6,
        }}>
        {!isBookmarked ? (
          <ToggleButtonWithIcon
            onPressFunction={toggleBookMark}
            status="OFF"></ToggleButtonWithIcon>
        ) : (
          <ToggleButtonWithIcon
            onPressFunction={toggleBookMark}
            status="ON"></ToggleButtonWithIcon>
        )}
        <TouchableOpacity
          style={{
            backgroundColor: colors.primary,
            width: '70%',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
          }}>
          <Text style={{fontWeight: 'normal', fontSize: 24, color: 'white'}}>
            Read this book
          </Text>
        </TouchableOpacity>
      </View>
      <Toast />
    </View>
  );
};

const styles = StyleSheet.create({
  bookPageContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginVertical: 20,
    justifyContent: 'center',
  },
  bookPageThumbnail: {
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
  bookPageTitle: {
    alignSelf: 'center',
    fontSize: 28,
    marginHorizontal: 20,
    textAlign: 'center',

    fontWeight: 'bold',
    marginBottom: 10,
  },
  bookPageSubTitle: {
    marginVertical: 5,
    alignSelf: 'center',
    fontSize: 14,
    marginHorizontal: 20,
    textAlign: 'center',
  },
  ratingContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 3,
  },
  ratingStarIcon: {
    alignSelf: 'center',
  },
  ratingAmount: {
    fontSize: 16,
  },
});

export default BookPage;
