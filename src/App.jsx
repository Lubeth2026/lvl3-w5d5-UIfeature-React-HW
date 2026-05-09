
import { useEffect, useState } from 'react'
import './App.css'

function App() {
//GET fetch Data from API//
    const [characters, setCharacters] = useState([]);
    const [errors, setErrors] = useState("");

    useEffect(()=>{
      async function getData() {
        try {
          const res = await fetch("https://rickandmortyapi.com/api/character");
          const data = await res.json();
          console.log(data)
          setCharacters(data.results)
        } catch (error) {
          console.log(error)
          setErrors("Characters were unavailable to GET")
        }
      }
      getData();
    }, [])
  
  return (
    <div>
      <h1>React UI Feature! (W5D5)</h1>
      <h2>!Rick & Morty!</h2>
    </div>
  )
}

export default App
