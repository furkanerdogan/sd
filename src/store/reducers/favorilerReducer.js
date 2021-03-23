
import { ADDFAVORI, REMOVEFAVORI } from '../actions/types';
const initialState = {
    favoriler: [],
    alreadyHave: false,
};
const favorilerReducer = (state = initialState, action) => {

    switch (action.type) {

        case REMOVEFAVORI:
            const removeAll = state.favoriler.filter(a => a.Id !== action.payload.Id)
            return {
                ...state,
                favoriler: removeAll,
            };

        case ADDFAVORI:
            return {
                ...state,
                favoriler: action.payload.favoriItems.slice()
            };

        default:
            return state;
    }
};
export default favorilerReducer;

