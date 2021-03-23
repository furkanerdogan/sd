import { FETCH_URUN_SUCCES, FETCH_URUN_FAILD, FETCH_URUN_START, ORDER_PRODUCTS_BY_PRICE } from '../actions/types';

const initialState = {
    hata: "",
    isloading: false,
    urunlist: [],
    filteredItems: [],
    sort: "",
};
const urunReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_URUN_START:
            console.log("11111111111111111111111111111111111111111");
            return {
                ...state,
                isloading: true,
                hata: "",

            };
        case FETCH_URUN_SUCCES:
            console.log("urun list", state.urunlist);
            console.log("222222222222222222222222222222222")
            return {
                ...state,
                urunlist: action.payload,
                filteredItems: action.payload,
                isloading: false,

            };
        case FETCH_URUN_FAILD:
            console.log("3333333333333333333333333333333333333333333333");
            return {
                ...state,
                hata: action.payload,
                isloading: false,

            };
        case ORDER_PRODUCTS_BY_PRICE:
            console.log("4444444444444444444444444444");
            return {
                ...state,
                filteredItems: action.payload.items,
                sort: action.payload.sort,

            };
        default:
            return state;
    }
};
export default urunReducer;