import React, {useState} from 'react'
import SearchBackend from './SearchBackend'
const Search = () => {

    const [valueSearch, setfirst] = useState("")

    const change = (event) => {
        setfirst(event.target.value)
    }
  return (
    <>
        <div className='flex justify-center items-center'>
            <input className='p-2 w-96 m-2' placeholder='Search Image' onChange={change} value={valueSearch}/>
        </div>
        {
            valueSearch === "" ? null :  <SearchBackend name={valueSearch}/>
        }
       
    </>
  )
}

export default Search