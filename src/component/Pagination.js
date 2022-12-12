import React, { useState, useEffect } from "react";
import {  useNavigate} from "react-router-dom";
import axios from "axios";



export default function Pagination() {

    const [post , setPost] = useState([]);
    const [loading, setLoading]= useState(false);
    const [currentPage,setCurrentPage] = useState(1);
    const [ postPerPage, setPostPerPage]=useState(5);


    useEffect(()=>{
        const fetchPost = async () =>{
            setLoading(true) ;
        }

    },[])
  return (
    <div>pagination</div>
  )
}
