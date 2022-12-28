import { useContext } from 'react';
import { UsersContext } from '../context/usersContext';

export const useUsers = () => {
   const context = useContext(UsersContext);

   if (!context) {
      throw Error("useUsersContext must be inside an UsersContextProvider");
   }

   return context;
}
