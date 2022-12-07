import React from "react";
import { Link } from "react-router-dom";
export default function LinkButton() {
  return (
    <div>
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
    </div>
  );
}
