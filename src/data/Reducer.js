export const initalState = {
    basket: [],
};

// Selector
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);



// reducer is a way of saying, when I get state (anything in data layer), we then minipulate things in the state.


const reducer = (state, action) => {

    console.log(action)
    switch (action.type) {


        case 'ADD_TO_BASKET':

            //LOGIC OF ADDING TO BASKET GOES Header
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        // break;

        case 'REMOVE_FROM_BASKET':

            //LOGIC FOR REMOVING ITEM FROM BASKET 

            // first I need to clone the current basket
            let newBasket = [...state.basket];

            // we check to see if  product exist
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0) {

                // the item exist and remove it
                // splice is going to find it and cut it, this removes it from the basket 
                newBasket.splice(index, 1);

            } else {
                console.warn('Cant remove product')
            }


            return {
                ...state,
                basket: newBasket,
            };



        // break;

        //you need a default state

        default:

            //If you don't know what to do with it, return the state
            return state;
    }
}

export default reducer;