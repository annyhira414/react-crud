import React, { useEffect, useState } from 'react'
import LinkButton from './LinkButton';
// import axios from "axios";
// import LinkButton from "./LinkButton";
import Delete from '../component/Delete';

export default function SearchFilter() {  
    const[data, setData] = useState([]);
    //const [userData, setUserData] = useState();

    const[filterVal, setFilterVal] = useState('');
    const [searchApiData, setSearchApiData] = useState([])
    useEffect(()=>{
        const fetchData=()=>{
            fetch(`http://localhost:4000/users`)
            .then(response => response.json())
            .then(json =>{
                setData(json)
                setSearchApiData(json)
            })
        }
        fetchData();
    },[])
 
    const handleFilter=(e)=>{ 
        if(e.target.value === '') {
            setData(searchApiData)
        } else {
           const filterRes = searchApiData.filter(item =>item.name.toLowerCase().includes(e.target.value.toLowerCase()))
           setData(filterRes)
        }
        setFilterVal(e.target.value)
    }
// deete 


  return (
   
    <div>searchFilter
        <input value={filterVal} onInput={(e)=>handleFilter(e)}/>
 <table>
        <th>
            name
        </th>
        <th>
            phone
        </th>
        <th>
            email
        </th>
        <th>
            city
        </th>
        {
            data.map(item =>{
                return(
                    <tr key={item.id}>
                    <td className="py-4 px-6">{item.id}</td>

                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{item.city}</td>

                        {/* <LinkButton  deleteUser={deleteUser} userId={item.id}  /> */}
                    
                        <LinkButton  />
                           
                       
                    </tr>
                )
            })
        } 


            {/* {userData &&
                userData.map((users) => (
                  <tr key={users.id}>
                    <td className="py-4 px-6">{users.id}</td>
                    <td>{users.name}</td>
                    <td>{users.email}</td>
                    <td>{users.phone}</td>
                    <td>{users.city}</td>
                    </tr>
                ))} */}

                {}

   
   
   
   

        
        
        
        
    </table> 

    </div>


  )
}
