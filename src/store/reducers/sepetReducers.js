
import { ADDSEPET, REMOVEONE, REMOVEALL } from '../actions/types';
const initialState = {
    sepet: [],
    adet: 0,
};




const sepetReducer = (state = initialState, action) => {

    switch (action.type) {
        case REMOVEONE:

            return {
                ...state,
                sepet: action.payload.removeOneItem.slice(),

            };
        case REMOVEALL:


            let removeAll = state.sepet.filter(a => a.Id !== action.payload.Id)
            return {
                ...state,
                sepet: removeAll,
            };

        case ADDSEPET:

            return {
                ...state,
                sepet: action.payload.cartItems.slice(),
            };

        default:
            return state;
    }
};
export default sepetReducer;

