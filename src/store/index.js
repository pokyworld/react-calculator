import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import reducer from '../reducers';

// defaults to localStorage for web and AsyncStorage for react-native
import storage from 'redux-persist/lib/storage' 


const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];

const persistConfig = {
    key: "root",
    storage,
    whitelist: []
};
const pReducer = persistReducer(persistConfig, reducer);
export const store = createStore(
    pReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
);
export const persistor = persistStore(store);

export default persistor;
