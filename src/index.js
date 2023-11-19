import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';

import RootStore from './store';
import App from './App';

const store = RootStore.create({});

export const StoreContext = createContext(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
);
