import React from 'react'

const SearchBackend = (props) => {
    const img = `https://source.unsplash.com/600x300/?${props.name}`
  return (
    <div className='flex justify-center items-center'>
        <img className='w-720 h-auto' src={img}/>
    </div>
  )
}

export default SearchBackend