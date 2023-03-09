const {createSlice} = require('@reduxjs/toolkit')
const initialState = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        add(state,action){
            console.log(action)
            state.push(action.payload)
          
        },
        remove(){}
    }
})

export const {add,remove} = cartSlice.actions;
export default cartSlice.reducer; 