import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Recommended: undefined;
  Bookmarks: undefined;
  Profile: undefined;
};

export type HomeTabParamList = {
  Landing: undefined;
  Book: BookPage;
};

export type BookPage = {
  bookDetails: BasicBookDetails;
};

export type LandingPageProps = NativeStackScreenProps<
  HomeTabParamList,
  'Landing'
>;

export type BookPageProps = NativeStackScreenProps<HomeTabParamList, 'Book'>;

export type BooksApiResponse = {
  error: string;
  total: string;
  books: BasicBookDetails[];
};

export interface BasicBookDetails {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}

export type BookProps = {
  book: BasicBookDetails;
};

export type BookState = {
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
  response: BooksApiResponse;
};

export interface BasicBookDetails {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}

export type BooksLineUpProps = {
  title: string;
  booksToShow: BasicBookDetails[];
};
