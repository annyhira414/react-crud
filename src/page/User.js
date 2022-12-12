import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import SearchFilter from "./searchFilter";

import LinkButton from "./LinkButton";
//import Search from "./Search";
// import Thead from "./Thead";

export default function User() {
  const [userData, setUserData] = useState();
  const [search, setSearch] = useState();
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
    axios.delete(`http://localhost:4000/users/${id}`).then(alert("Deleted"))(
      loadUser()
    );
  }

  // fro search

  const qurey = (userData) => {
    return userData.filter((item) => item.name.toLowerCase().includes(search));
  };

  return (
    <>
      <div className="w-full h-full flex flex-col px-10 py-8">
        <h1 className="text-black text-3xl font-semibold ">Home Page</h1>
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          {/* <Search />
          <SearchFilter/> */}

          <div
            className="pb-4 bg-white dark:bg-gray-900"
            // onChange={(e) => setQuery(e.target.value.toLowerCase())}
          >
            <label for="table-search" className="sr-only">
              Search
            </label>
            <div className="relative mt-1">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                //  value={value}
                onChange={(e) => setSearch(e.target.value)}
                // value={filterVal} onInput={(e)=>handleFilter(e)}

                type="text"
                id="table-search"
                className="block p-2 pl-10 w-80 text-sm
             text-gray-900 bg-gray-50 rounded-lg border
              border-gray-300 focus:ring-blue-500 focus:border-blue-500
               dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for items"
              />
            </div>
          </div>

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
              {/* {userData && */}
              {search
                ? qurey(userData)?.map((users) => (
                    <tr key={users.id}>
                      <td className="py-4 px-6">{users.id}</td>
                      <td>{users.name}</td>
                      <td>{users.email}</td>
                      <td>{users.phone}</td>
                      <td>{users.city}</td>

                      <LinkButton deleteUser={deleteUser} userId={users.id} />
                    </tr>
                  ))
                : userData?.map((users) => (
                    <tr key={users.id}>
                      <td className="py-4 px-6">{users.id}</td>
                      <td>{users.name}</td>
                      <td>{users.email}</td>
                      <td>{users.phone}</td>
                      <td>{users.city}</td>
                      <td className="py-4 px-8">
                      
                      <LinkButton deleteUser={deleteUser} userId={users.id} />
                      </td>
                     
                    </tr>
                  ))}
            </thead>
          </table>
        </div>
      </div>
    </>
  );
}
