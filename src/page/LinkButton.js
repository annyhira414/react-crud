import React from "react";
import { Link } from "react-router-dom";
export default function LinkButton({deleteUser, userId }) {
  return (
    <div>
      <td className="py-4 px-6">
        {/* <Link to='/edit/${userId}'
           // to={`/editUser/${id}`}>
        */}
        <Link to={`/edit/${userId}`} >
          <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline ">
            edit
          </button>
        </Link>
        <Link >
          <button
            onClick={() => deleteUser(userId)}
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline px-4  "
          >
            delete 
          </button>
        </Link>
        <Link  to={`/details/${userId}`}>
          <button 
         
          className="font-medium text-green-600 dark:text-green-500 hover:underline"
        >
          </button>
          Details
        </Link>
      </td>
    </div>
  );
}
