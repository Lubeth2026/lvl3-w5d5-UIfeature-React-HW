

import { useEffect, useState } from 'react';
import './App.css'
import Players from './components/Players';
import Filter from './components/Filter';
import Sort from './components/Sort';

function App() {
//GET fetch Data from API//
   const [characters, setCharacters] = useState([]);
   const [errors, setErrors] = useState("");
//NEW State//
   const [showCharacters, setShowCharacters] = useState(true);
//NEW Pagination State//
   const [page, setPage] = useState(1);
//Total Pages of Characters from API//
   const [totalPages, setTotalPages] = useState(1);
//Filter Status State//
    const [filterStatus, setFilterStatus] = useState("ALL");
//Sort Name State//
    const [sortOrder, setSortOrder] = useState("default");

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("https://rickandmortyapi.com/api/character/?page=" + page,);

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        //console.log(data.results[0].name);
        console.log(data);
        setCharacters(data.results);
        {/*Save the total pages in API*/}
        setTotalPages(data.info.pages);
      } catch (error) {
        console.log(error);
        setErrors("Characters were unavailable to GET");
      }
    }
    getData();
  }, [page]); //This page runs again when page changes//
  

  return (
    <div>
      <h1>React UI Feature! (W5D5)</h1>
      <h2>!Rick & Morty!</h2>
      {/*Pagination Buttons prev/next*/}
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setPage((prev) => prev + 1)} disabled={page === 1}>Prev</button>
        <span style={{ margin: "0 10px" }}>Page {page} of {totalPages}</span>
        <button onClick={() => setPage((prev) => prev + 1)} disabled={page === totalPages}>Next</button>
      </div>
      {errors && <p>{errors}</p>}
      <Filter filterStatus={filterStatus} setFilterStatus={setFilterStatus}/>
      <Sort sortOrder={sortOrder} setSortOrder={setSortOrder}/>
      {characters.filter((character)=>{
        if(filterStatus === "All"){
          return true;
        } return character.status === filterStatus;
      }).sort((a, b)=>{
        if(sortOrder === "asc"){
          return a.name.localeCompare(b.name);
        } 
        if(sortOrder === "desc"){
          return b.name.localeCompare(a.name);
        } return 0;
      }).map((character) => (
        <Players key={character.id} name={character.name} id={character.id} status={character.status} 
        created={character.created} image={character.image}/>))}
    </div>
  );
}

export default App
