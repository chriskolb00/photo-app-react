import React from 'react'
import {BiSolidDownload} from 'react-icons/bi'
export default function AboutPhoto(props) {
    const item = props.item 
    console.log(item)
    const downloadLink = item.src.portrait;
    const downloadImage=()=>{
        fetch(downloadLink)
        .then(res=> res.blob())
        .then(file=>{
            const a = document.createElement("a");
            a.href= URL.createObjectURL(file)
            a.download = new Date().getTime()
            a.click();
        }).catch(()=> alert("Failed to download image!"))
    }
  return (
    <div className="h-[100vh] w-[50vw] my-10 space-y-10 flex flex-col">
        <h1 className='text-3xl font-bold'>Photographer: {item.photographer}</h1>
        <p className='text-lg font-semibold'>(Optional Caption): {item.alt}</p>
        <a className='text-lg font-semibold text-red-500' href={item.photographer_url}>Visit Site to leave a like</a>
        <button onClick={downloadImage} className='flex flex-row text-lg space-x-5'>
            Download <BiSolidDownload size={30}/>
        </button>
    </div>
  )
}
