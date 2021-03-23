import { ADDFAVORI, REMOVEFAVORI } from "./types";

export const addfavori = (favoriler, item) => {

    const favoriItems = favoriler.slice();

    let productAlreadyInFavori = false;

    favoriItems.forEach((cp) => {
        if (cp.Id === item.Id) {
            productAlreadyInFavori = true;

        }
    });

    if (!productAlreadyInFavori) {
        favoriItems.push({ ...item });
    }

    return async (dispatch) => {
        dispatch({ type: ADDFAVORI, payload: { favoriItems } });

    };
};

export const removefavori = (item) => {

    return async (dispatch) => {
        dispatch({
            type: REMOVEFAVORI,
            payload: item,
        });
    };
};
