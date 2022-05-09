import React, {useState, useEffect} from 'react'
import axios from 'axios'
const Pokemon = () => {
 
    const [num, Statenum] = useState()
    const [pokemon, pokemonState] = useState()
    const [moves, movesState] = useState()


useEffect(() => {
 async function myData() {
     const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
    //  console.log(res.data.name);
     pokemonState(res.data.name)
     movesState(res.data.moves.length);
  }
  myData()
})

  return (
    <>
    <div className='text-3xl m-5'>
    <h1>This is my <span className='text-red-800 capitalize m-2 font-bold'>{pokemon}</span> </h1>
        <h1>It moves <span className='text-red-800 capitalize m-2 font-bold'>{moves}</span> </h1>
        <select className='m-2' value={num} onChange={(event) =>{
                Statenum(event.target.value)
        }}>
            <option value={1}>1</option>
            <option value={25}>25</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={10}>10</option>
            <option value={12}>12</option>
        </select>
    </div>

    </>
  )
}

export default Pokemon