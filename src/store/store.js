import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist'


import rootReducer from './reducers/combinereducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['ReducerSepet', 'ReducerUrun', 'ReducerFavoriler']
};


const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
const persistor = persistStore(store);
export { store, persistor }