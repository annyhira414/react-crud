import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [empData, empDataChange] = useState();
  // do the work
  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <>
      <div className="w-full h-full flex flex-col px-10 py-8">
        <h1 className="text-black text-3xl font-semibold ">Home Page</h1>

        {/* // table  */}

        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <div className="pb-4 bg-white dark:bg-gray-900">
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
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="p-4 w-4 font-bold ">1</td>
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Mac liva
                </th>
                <td className="py-4 px-6">Mac_liva@gmail.com</td>
                <td className="py-4 px-6">01629999399</td>
                <td className="py-4 px-6">dhaka</td>
                <td className="py-4 px-6">
                  <Link
                    to="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline "
                  >
                    Edit
                  </Link>
                  <Link
                    to="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline px-6"
                  >
                    Delete
                  </Link>
                  <Link
                    to="#"
                    className="font-medium text-green-600 dark:text-green-500 hover:underline"
                  >
                    Details
                  </Link>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="p-4 w-4 font-bold ">2</td>
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Microsoft
                </th>
                <td className="py-4 px-6">White_cool@gmail.com</td>
                <td className="py-4 px-6">0162890987</td>
                <td className="py-4 px-6">London</td>
                <td className="py-4 px-6">
                  <Link
                    to="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline "
                  >
                    Edit
                  </Link>
                  <Link
                    to="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline px-6"
                  >
                    Delete
                  </Link>
                  <Link
                    to="#"
                    className="font-medium text-green-600 dark:text-green-500 hover:underline"
                  >
                    Details
                  </Link>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="p-4 w-4 font-bold ">3</td>
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Magic Mouse
                </th>
                <td className="py-4 px-6">Black_cool@gmail.com</td>
                <td className="py-4 px-6">01834668609</td>
                <td className="py-4 px-6">Delhi</td>
                <td className="py-4 px-6">
                  <Link
                    to="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline "
                  >
                    Edit
                  </Link>
                  <Link
                    to="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline px-6"
                  >
                    Delete
                  </Link>
                  <Link
                    to="#"
                    className="font-medium text-green-600 dark:text-green-500 hover:underline"
                  >
                    Details
                  </Link>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="p-4 w-4 font-bold ">4</td>
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Watch Silver
                </th>
                <td className="py-4 px-6">Silver_Watch@gmail.com</td>
                <td className="py-4 px-6">01987654333</td>
                <td className="py-4 px-6">Bangalore</td>
                <td className="py-4 px-6">
                  <Link
                    to="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline "
                  >
                    Edit
                  </Link>
                  <Link
                    to="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline px-6"
                  >
                    Delete
                  </Link>
                  <Link
                    to="#"
                    className="font-medium text-green-600 dark:text-green-500 hover:underline"
                  >
                    Details
                  </Link>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="p-4 w-4 font-bold ">5</td>
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  miki jon
                </th>
                <td className="py-4 px-6">miki_jon12@gmail.com</td>
                <td className="py-4 px-6">019827365722</td>
                <td className="py-4 px-6">Mipur</td>
                <td className="py-4 px-6">
                  <Link
                    to="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline "
                  >
                    Edit
                  </Link>
                  <Link
                    to="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline px-6"
                  >
                    Delete
                  </Link>
                  <Link
                    to="#"
                    className="font-medium text-green-600 dark:text-green-500 hover:underline"
                  >
                    Details
                  </Link>
                </td>
              </tr>
              <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="p-4 w-4 font-bold ">6</td>
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple iMac
                </th>
                <td className="py-4 px-6">Silvermai@gmail.com</td>
                <td className="py-4 px-6">01838890889</td>
                <td className="py-4 px-6">Mumbai</td>
                <td className="py-4 px-6">
                  <Link
                    to="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline "
                  >
                    Edit
                  </Link>
                  <Link
                    to="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline px-6"
                  >
                    Delete
                  </Link>
                  <Link
                    to="#"
                    className="font-medium text-green-600 dark:text-green-500 hover:underline"
                  >
                    Details
                  </Link>
                </td>
              </tr>

              {empData &&
                empData.map((users) => (
                  <tr key={users.id}>
                    <td className="py-4 px-6">{users.id}</td>
                    <td>{users.name}</td>
                    <td>{users.email}</td>
                    <td>{users.phone}</td>
                    <td>{users.city}</td>
                    <td className="py-4 px-6">
                      <Link
                        to="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline "
                      >
                        Edit
                      </Link>
                      <Link
                        to="#"
                        className="font-medium text-red-600 dark:text-red-500 hover:underline px-6"
                      >
                        Delete
                      </Link>
                      <Link
                        to="#"
                        className="font-medium text-green-600 dark:text-green-500 hover:underline"
                      >
                        Details
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
