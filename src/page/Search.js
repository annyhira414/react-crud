import React, { useState, useEffect } from 'react';
// import data from 'bd.json';
// import axios from "axios";


export default function Search()
 {
    const[data, setData] = useState([]);
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


  // const [value, setvalue]= useState([]);
  //const [query, setQuery] = useState("");
  // const [datas, setData] = useState([]);

  // const handelSearch = async (e) => {
  //   e.preventDefult();
  //   return await axios
  //     .get(`http://localhost:4000/users?q=${value}`)
  //     .then((resp) => {
  //       setvalue(resp.data);
  //       setvalue(""); // jeno serch korra por faka hoye jay  
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await axios.get(`http://localhost:4000?q=${query}`);
  //     setvalue(res.value);
  //   };
  //   if (query.length === 0 || query.length > 2) fetchData();
  // }, [query]);

  return (
   
    <div>
         <div className="pb-4 bg-white dark:bg-gray-900"
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
              // value={value}
              // onChange={(e) => setvalue(e.target.value)}

              value={filterVal} onInput={(e)=>handleFilter(e)}

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
        </div>
  )
}
