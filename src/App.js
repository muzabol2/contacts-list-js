import { useState } from "react";
import { useAxios } from "./hooks/useAxios";
import UserField from "./components/UserField";
import './App.css';

export default function App() {
   const [filter, setFilter] = useState('');
   const [loading, data, error] = useAxios({
      method: 'GET',
      url: 'https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json'
   });

   if (loading) return <p>Loading ....</p>;
   if (error !== '') return <p>{error}</p>;
   if (!data) return <p>Data was null</p>;

   const usersSortedAndFiltered = data?.sort((a, b) => (a.last_name > b.last_name) ? 1 : ((b.last_name > a.last_name) ? -1 : 0))
      .filter(f => (f.first_name.concat(" ").concat(f.last_name)).toLowerCase().includes(filter.toLowerCase()) || filter === '');

   return (
      <div>
         <div >
            <label className="filter">
               <span>Search:</span>
               <input id="filter"
                  name="filter"
                  type="text"
                  value={filter}
                  onChange={event => setFilter(event.target.value)}
               />
            </label>
         </div>
         {usersSortedAndFiltered.map((user) => (
            <UserField
               key={user.id}
               user={user} />
         ))}
      </div>
   );
}
