import {createContext,useReducer} from "react";


 export const CartContext=createContext();
const reducer=(state,action)=>{
switch(action.type){
case "ADD":
return {...state,cart:[...state.cart,action.payload]};
default:
return state;
}
};

export default function CartProvider({children}){
const [state,dispatch]=useReducer(reducer,{cart:[]});

return(
<CartContext.Provider value={{state,dispatch}}>
{children}
</CartContext.Provider>
);
}