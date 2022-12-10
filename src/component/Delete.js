import React, { useEffect, useState } from 'react'
import axios from "axios";
import LinkButton from "../page/LinkButton";



export default function Delete() {
    const [data, setUserData] = useState();


    const loadUser = () => {
        axios
          .get("http://localhost:4000/users")
          .then((resp) => {
            setUserData(resp.data);
          })
          .catch((err) => {
            console.log(err.message);
          });
      };
      useEffect(() => {
        loadUser();
      }, []);
        function deleteUser(id) {
            axios.delete(`http://localhost:4000/users/${id}`).then(alert("Deleted"))(loadUser());
          }

  return (
    <div>Delete
        { data.map(item =>{
                return(
                    <tr key={item.id}>
            <LinkButton  deleteUser={deleteUser} userId={item.id}  />
            </tr>)})
        }
 

    </div>
  )
}
