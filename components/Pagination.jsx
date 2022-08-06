import {React,useState} from 'react'

function Pagination() {
  let[pageNumber,setPage] = useState(1);
  function goAhead(){
    setPage(pageNumber+1);
  }
  function goBehind(){
    if(pageNumber>1)
    setPage(pageNumber-1);
}
  return (
    <>
    <div className = "w-full flex justify-center mb-8">
    
    <button onClick={goBehind} className = "p-2 border-3 border-indigo-500 text-indigo-500 border-r-0 rounded-l-xl"> Previous  </button>
    <button className = "p-2 border-l-2 border-r-2 border-indigo-500 text-indigo-500"> {pageNumber} </button>
    <button onClick={goAhead} className = "p-2 border-3 border-indigo-500 text-indigo-500 border-l-0 rounded-r-xl"> Next </button>
   
     </div>
    </>
    
  )
}

export default Pagination