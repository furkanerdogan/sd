import { ADDSEPET, REMOVEONE, REMOVEALL } from "./types";

export const addsepet = (sepet, item) => {

    const cartItems = sepet.slice();

    let productAlreadyInCart = false;

    cartItems.forEach((cp) => {
        if (cp.Id === item.Id) {
            cp.count += 1;
            productAlreadyInCart = true;
        }
    });

    if (!productAlreadyInCart) {
        cartItems.push({ ...item, count: 1 });
    }

    return async (dispatch) => {
        dispatch({ type: ADDSEPET, payload: { cartItems } });

    };
};
export const removeOne = (sepet, item) => {
    console.log("gelen sepet:", sepet);
    console.log("gelen item:", item);
    let removeOneItem = sepet.slice();
    let LastOneItem = false;
    removeOneItem.forEach((x) => {
        if (x.Id === item.Id && x.count > 0) {
            x.count -= 1;
        }
        if (x.Id === item.Id && x.count === 0) {
            LastOneItem = true;
        }
    })
    if (LastOneItem === true) {
        removeOneItem = removeOneItem.filter(a => a.Id !== item.Id)
        console.log("removeOneItem2:", removeOneItem);
    }

    return async (dispatch) => {
        dispatch({
            type: REMOVEONE,
            payload: { removeOneItem },
        });
    };
};

export const removeAll = (item) => {

    return async (dispatch) => {
        dispatch({
            type: REMOVEALL,
            payload: item,
        });
    };
};
