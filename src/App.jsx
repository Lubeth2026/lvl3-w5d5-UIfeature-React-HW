
import { useEffect, useState } from 'react'
import './App.css'
import Players from './components/Players';

function App() {
//GET fetch Data from API//
    const [characters, setCharacters] = useState([]);
    const [errors, setErrors] = useState("");
//NEW State//
    const [showCharacters, setShowCharacters] = useState(true);

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
      {characters.map((character)=>(
        <Players key={character.id} name={character.name} id={character.id} 
        status={character.status} created={character.created} image={character.image}/>
      ))}
    </div>
  )
}

export default App
