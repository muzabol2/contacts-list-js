import { createContext, useReducer } from 'react';

export const UsersContext = createContext();

export const userReducer = (state, action) => {
   switch (action.type) {
      case "ADD_USER":
         const addedState = { ...state, usersChecked: [...state.usersChecked, action.payload] };
         console.log(addedState.usersChecked);
         return addedState;
      case "REMOVE_USER":
         const removedState = { ...state, usersChecked: [...state.usersChecked.filter(user => user !== action.payload)] };
         console.log(removedState.usersChecked);
         return removedState;
      default:
         return state;
   }
}

export const UsersContextProvider = ({ children }) => {
   const [state, dispatch] = useReducer(userReducer, {
      usersChecked: [],
   });

   return (
      <UsersContext.Provider value={{ ...state, dispatch }}>
         {children}
      </UsersContext.Provider>
   );
}
