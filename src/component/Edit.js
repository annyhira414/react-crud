import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Edit = () => {
  const { userId } = useParams();

  const [personName, setPersonName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");

  console.log("edite", userId);
 
  const usework =() => {
    axios.get(`http://localhost:4000/users/${userId}`).then((res) => {
      console.log("rest", res.data);
      setPersonName(res.data.name);
      setEmail(res.data.email);
      setPhone(res.data.phone);
      setCity(res.data.city);
    });
  };

  useEffect(()=>{
    usework();
  },[]);

  // useEffect(() => {
  //   loadUser();
  // }, []);

  const navigate = useNavigate();
  const data = {
    name: personName,
    email: email,
    phone: phone,
    city: city,
  };

  function submitForm(e) {
    e.preventDefault();

    axios
      .put(`http://localhost:4000/users/${userId}`, data)
      .then(alert("Saved successfully."))(navigate("/"));
  }

  return (
    <div>
      <form>
        <div className=" px-10 py-10 grid md:grid-cols-2 md:gap-6">
          <div className="relative z-10 mb-6 w-full group">
            <input
              type="text"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full 
              text-sm text-gray-900 bg-transparent 
              border-0 border-b-2 border-gray-300 
              appearance-none dark:text-black
               dark:border-gray-600
                dark:focus:border-blue-500 
                focus:outline-none focus:ring-0
                 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={personName}
              onChange={(e) => setPersonName(e.target.value)}
            />
            <label
              for="floating_email"
              className="peer-focus:font-medium absolute text-sm
               text-gray-500 dark:text-gray-400 
               duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
               peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500
               peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
               peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>
        </div>

        <div className="px-10 py-10 grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900
               bg-transparent border-0 border-b-2 border-gray-300 
               appearance-none dark:text-black dark:border-gray-600
                dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              for="floating_first_name"
              className="peer-focus:font-medium absolute text-sm
               text-gray-500 dark:text-gray-400 duration-300 
               transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
               peer-focus:left-0 peer-focus:text-blue-600
                peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
                 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
                 peer-focus:-translate-y-6"
            >
              Email
            </label>
          </div>
        </div>
        <div className="  px-10 py-10 grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label
              for="floating_last_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone
            </label>
          </div>
        </div>
        <div className="  px-10 py-10 grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <label
              for="floating_last_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              City
            </label>
          </div>
        </div>
        {/* <button
          type="submit"
          className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
          focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full
           sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700
            dark:focus:ring-blue-800"
        >
          Update 
        </button> */}

        <Link to="/">
          <button
            onSubmit={submitForm}
            type="button"
            className=" p-2 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4
          focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2
           dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Update info
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Edit;
