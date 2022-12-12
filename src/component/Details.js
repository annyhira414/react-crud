

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Details() {
  const {userId} = useParams();
  const [userData, setUserData] = useState();

  console.log('userid', userId);

  useEffect(() => {
    axios.get(`http://localhost:4000/users/${userId}`).then((res) => {
      setUserData(res.data);
    });
  }, [userId]);
console.log(userId)
 

  console.log(userData);
  return (

   
    <>
      <div className="h-full w-full flex flex-col mt-32 justify-center items-center">
        <Link
          to={`/`}
          className="hover:bg-teal-600 bg-white hover:shadow-md  outline-none rounded-xl font-bold border mt-8 hover:text-teal-200 text-blue-600 border-zinc-400 py-4 px-4 pl-4"
        >
          Back To Home
        </Link>
        {userData && (
          <div className="w-[700px] h-[200] px-6 py-4 flex shadow-xl rounded-xl justify-center items-center bg-blue-600 mt-16 border-blue-800 border-2">
            <div className="w-5/12 flex flex-col space-y-4">
              <h4 className=" text-white font-bold text-2xl border-black border-b-2">
                Name
              </h4>
              <h4 className="text-white font-bold text-2xl border-black border-b-2">
                Email
              </h4>
              <h4 className="text-white font-bold text-2xl border-black border-b-2">
                Phone
              </h4>
              <h4 className="text-white font-bold text-2xl border-black border-b-2">
                City
              </h4>
            </div>
            <div className="w-7/12 flex flex-col space-y-4  ">
              <h4 className="text-blue-200 font-bold text-2xl border-black border-b-2">
                {userData.name}
              </h4>
              <h4 className="text-blue-200 font-bold text-2xl border-black border-b-2">
                {userData.email}
              </h4>
              <h4 className="text--200 font-bold text-2xl border-black border-b-2">
                {userData.phone}
              </h4>
              <h4 className="text--200 font-bold text-2xl border-black border-b-2">
                {userData.city}
              </h4>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Details;
