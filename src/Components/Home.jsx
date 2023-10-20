import React, { useEffect, useState } from 'react'
import Photos from './Photos';
export default function Home() {
  
  const apiKey = "k7QU8cJADc9sV7XoR7ux81hu4WeGBjUuVm8Tjz0iPvSuszIiICG7PIA7";

  
  let [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const photoPerPage = 50;
  
  const [pictures,setPictures] = useState([])
  
  let apiUrl = `https://api.pexels.com/v1/curated?page=${currentPage}&per_page=${photoPerPage}`

  function getImages(apiURL){
    fetch(apiURL, {headers:{Authorization:apiKey}})
    .then(response => response.json())
    .then(data=>{
      setPictures(data.photos)
    })
    .catch(()=> alert("Failed to load images!"))
  }
  const onSubmit=()=>{
    var num = Math.floor(Math.random()*5)
    setCurrentPage(num)
    apiUrl = searchTerm? `https://api.pexels.com/v1/search?query=${searchTerm}&page=${currentPage}&per_page=${photoPerPage}`: apiUrl
    getImages(apiUrl);
  }
  const handleEnterKeyPress=(e)=>{
    if(e.key==="Enter"){
      onSubmit()
    }
  }
  useEffect(()=>{
    onSubmit()
  },[])

  return (
    <div>
      <section className='justify-center items-center text-center flex flex-col bg-slate-400 py-10 space-y-10'>
      
        <div className='space-y-7'>
          <h1 className='text-2xl text-gray-800'>The Image Gallery</h1>
          <input className='border-2 border-gray-400 text-black px-5 py-1 rounded-md'
            id="search-bar" type="text" placeholder='Search terms for images'
            onChange={e=> setSearchTerm(e.target.value)} onKeyPress={handleEnterKeyPress} />

          <button className='mx-2 px-5 py-1 bg-gray-200 text-gray-800 rounded-md hover:bg-slate-600 hover:text-white'
            onClick={onSubmit} type="submite" >
              Search
          </button>

        </div>
        
      </section>

      <section className='flex justify-between flex-wrap md:px-10'> 
      {
      pictures?.map((item, index)=>(
        <Photos key={`${item?.photographer}+${index}`} item={item}/>
      ))
      }
      </section>
    </div>
    
  )
}
