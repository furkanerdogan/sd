

import { FETCH_URUN_FAILD, FETCH_URUN_START, FETCH_URUN_SUCCES, ORDER_PRODUCTS_BY_PRICE } from "./types";


export const Urunlistele = (ID) => {
    const Id = ID;
    return dispatch => {
        try {
            dispatch({ type: FETCH_URUN_START });
            fetch('http://192.168.56.1:3000/odata/products?$filter=SubCategoryId eq ' + Id)
                .then(res => res.json())
                .then(res => {
                    if (res.error) {
                        throw (res.error);
                    }
                    dispatch({ type: FETCH_URUN_SUCCES, payload: res.value });

                })
                .catch(error => {
                    dispatch({ type: FETCH_URUN_FAILD, payload: error.data })
                })
        }
        catch (e) {
            dispatch({ type: FETCH_URUN_FAILD, payload: e })
        }
    }
}
export const sortProducts = (items, sort) => {
    return dispatch => {
        const products = items.slice();

        if (sort !== "") {
            products.sort((a, b) =>
                sort === "pahalı"
                    ? a.Price < b.Price
                        ? 1
                        : -1
                    : a.Price > b.Price
                        ? 1
                        : -1
            );
        } else {
            products.sort((a, b) => (a.Price < b.Price ? 1 : -1));
        }
        dispatch({
            type: ORDER_PRODUCTS_BY_PRICE,
            payload: {
                items: products,
                sort: sort,
            },
        });
    }
};