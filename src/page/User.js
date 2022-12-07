import React, { useEffect, useState } from "react";

import LinkButton from "./LinkButton";
import Search from "./Search";
// import Thead from "./Thead";

export default function Home() {
  const [empData, empDataChange] = useState();
  // do the work
  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empDataChange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <div className="w-full h-full flex flex-col px-10 py-8">
        <h1 className="text-black text-3xl font-semibold ">Home Page</h1>
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <Search />

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
              <hr/>
              <hr/>
              {empData &&
                empData.map((users) => (
                  <tr key={users.id}>
                    <td className="py-4 px-6">{users.id}</td>
                    <td>{users.name}</td>
                    <td>{users.email}</td>
                    <td>{users.phone}</td>
                    <td>{users.city}</td>
                    <LinkButton />
                  </tr>
                ))}
            </thead>
          </table>
        </div>
      </div>
    </>
  );
}
