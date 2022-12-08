import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import SearchFilter from "./searchFilter";

import LinkButton from "./LinkButton";
import Search from "./Search";
// import Thead from "./Thead";

export default function User() {
  const [userData, setUserData] = useState();
  // do the work

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
    <>
      <div className="w-full h-full flex flex-col px-10 py-8">
        <h1 className="text-black text-3xl font-semibold ">Home Page</h1>
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <Search />
          <SearchFilter/>

          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  Id
                </th>
                <th scope="col" className="py-3 px-6">
                  Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Email
                </th>
                <th scope="col" className="py-3 px-6">
                  Phone
                </th>
                <th scope="col" className="py-3 px-6">
                  City
                </th>
                <th scope="col" className="py-3 px-6">
                  Action
                </th>
              </tr>
              <hr />
              <hr />
              {userData &&  userData.map((users) => (
                  <tr key={users.id}>
                    <td className="py-4 px-6">{users.id}</td>
                    <td>{users.name}</td>
                    <td>{users.email}</td>
                    <td>{users.phone}</td>
                    <td>{users.city}</td>

                    <LinkButton  deleteUser={deleteUser} userId={users.id}  />
                 
                    {/* <Link>
                      <button
                        onClick={() => deleteUser(users.id)}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline "
                      >
                        delete b
                      </button>
                    </Link> */}
                  </tr>
                ))}
            </thead>
          </table>
        </div>
      </div>
    </>
  );
}
