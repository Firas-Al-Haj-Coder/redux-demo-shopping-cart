import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
   
    name: "cart", 

    initialState: {
        cartList: [], 
        total: 0
    },

    reducers: {

        add(state, action){
            // Logic to add an article
            const updatedCartList = state.cartList.concat(action.payload); // inside our action is the prodcut passed

            const new_total = state.total + action.payload.price;

            return {...state, cartList: updatedCartList, total: new_total}; 
        }, 

        remove(state, action){
            // console.log(state);
            // console.log(action);

            const updatedCartList = state.cartList.filter(item => item.id !== action.payload.id) // via direkte Zugriffe auf state, da state in den Reducer Funktionen auf den Zustand des Slices bezieht nämlich cartState, also muss nicht state.cartState.cartList schreiben!!
            const updatedTotal = state.total - action.payload.price;
            return {...state, cartList: updatedCartList, total: updatedTotal};
        }
    }
});

// export to use 
export const {add, remove } = cartSlice.actions; // actions handeled by the slice reducers to be exported and used anywhere

export const cartReducer = cartSlice.reducer; // Dies ist die kombinierte Reducer-Funktion, die von Redux verwendet wird, um den Zustand basierend auf den Aktionen zu ändern. 
// ist die Funktion, die du in deinem Redux-Store verwenden wirst, um den Zustand der Anwendung zu verwalten in store 