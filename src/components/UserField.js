import { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useUsers } from '../hooks/useUsers';

export default function UserField({ user }) {
   const { dispatch, usersChecked } = useUsers();
   const [checkbox, setCheckbox] = useState(usersChecked.includes(user.id));

   const removeUser = () => {
      dispatch({ type: "REMOVE_USER", payload: user.id });
      setCheckbox(!checkbox);
   }

   const addUser = () => {
      dispatch({ type: "ADD_USER", payload: user.id });
      setCheckbox(!checkbox);
   }

   return (
      <div className='user-container'>
         {user.avatar ?
            <LazyLoadImage
               key={user.id}
               src={user.avatar}
               className="avatar"
               effect="blur"
            /> :
            <span className="avatar avatar--missing">
               {user.first_name.charAt(0)}{user.last_name.charAt(0)}
            </span>}
         <p>
            {user.first_name} {user.last_name}
         </p>
         <input
            type='checkbox'
            checked={checkbox}
            onChange={checkbox ? removeUser : addUser}
         />
      </div>
   )
}


