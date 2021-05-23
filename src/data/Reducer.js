export const initalState = {
    basket: [],
};



// reducer is a way of saying, when I get state (anything in data layer), we then minipulate things in the state.


function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_BASKET':

            //LOGIC OF ADDING TO BASKET GOES Header
            break;

        case 'REMOVE_FROM_BASKET':

            //LOGIC FOR REMOVING ITEM FROM BASKET 

            break;

        //you need a default state

        default:

            //If you don't know what to do with it, return the state
            return state;
    }
}

export default reducer;