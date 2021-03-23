import { combineReducers } from 'redux';
import sepetReducer from './sepetReducers';
import urunReducer from './urunReducers';
import favorilerReducer from './favorilerReducer';


const rootReducer = combineReducers({
    ReducerSepet: sepetReducer,
    ReducerUrun: urunReducer,
    ReducerFavoriler: favorilerReducer
});
export default rootReducer;
