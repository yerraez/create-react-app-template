import { 
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector
} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk'
import { ENABLE_REDUX_DEV_TOOLS } from 'src/constants';
import rootReducer from './rootReducer';

const persistConfig = {
  // Root
  key: 'root',
  // Storage Method (React Native)
  storage: storage,
  timeout: null 
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: ENABLE_REDUX_DEV_TOOLS,
  middleware: [thunk]
});


export const persistor = persistStore(store);

export const useSelector = useReduxSelector;
export const useDispatch = () => useReduxDispatch();


