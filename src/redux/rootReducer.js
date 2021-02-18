import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import loginReducer from './login/reducers';

const persistConfig = {
    key: 'login',
    storage,
}

const rootReducer = combineReducers({
    login: loginReducer
})

export default persistReducer(persistConfig, rootReducer);
