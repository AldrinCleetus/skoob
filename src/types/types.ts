import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Recommended: undefined;
  Bookmarks: undefined;
  Profile: undefined;
  Auth: undefined;
};

export type ViewAllBooksProps = {
  books: BasicBookDetails[];
};

export type HomeTabParamList = {
  Landing: undefined;
  Book: BookPage;
  ViewAll: undefined;
};

export type BookPage = {
  bookDetails: BasicBookDetails;
};

export type LandingPageProps = NativeStackScreenProps<
  HomeTabParamList,
  'Landing'
>;

export type AuthenticationPageProps = NativeStackScreenProps<
  RootStackParamList,
  'Auth'
>;

export type BookPageProps = NativeStackScreenProps<HomeTabParamList, 'Book'>;

export type HomeNavigation =
  NativeStackScreenProps<HomeTabParamList>['navigation'];

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
