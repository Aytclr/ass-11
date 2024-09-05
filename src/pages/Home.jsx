import React, { useEffect, useState } from 'react'
import AddBilgi from '../components/AddBilgi'
import BilgiList from '../components/BilgiList'
import axios from "axios"

const Home = () => {
const[tutorials,setTutorials]=useState([])

const url = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

//! GET-READ

const getBilgiler=async()=>{

   const res= await axios.get(url)

  //  console.log(res.data);
   
setTutorials(res.data)

}

useEffect(()=>{
  getBilgiler();
},[])

const deleteBilgi = async(id)=>{
  await axios.delete(`${url}${id}/`)
  getBilgiler();
}

const postBilgiler = async(yeniVeri)=>{
  await axios.post(url, yeniVeri)
  getBilgiler();
}



  return (
    <div>
      <AddBilgi postBilgiler={postBilgiler} />
      <BilgiList deleteBilgi={deleteBilgi} tutorials={tutorials}/>
    </div>
  )
}

export default Home