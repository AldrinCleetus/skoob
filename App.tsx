import * as React from 'react';
import {Provider} from 'react-redux';
import Store from './src/store/Store';
import {Auth0Provider} from 'react-native-auth0';
import {CLIENT_ID, DOMAIN_ID} from './src/utils/contants';
import InitialPage from './src/pages/InitialPage';
import {PersistGate} from 'redux-persist/integration/react';

import {persistStore} from 'redux-persist';
let persistor = persistStore(Store);

function App() {
  return (
    <Auth0Provider domain={DOMAIN_ID} clientId={CLIENT_ID}>
      <Provider store={Store}>
        <PersistGate loading={null} persistor={persistor}>
          <InitialPage />
        </PersistGate>
      </Provider>
    </Auth0Provider>
  );
}

export default App;
