
import React, { useState } from 'react'

function Filter({filterStatus, setFilterStatus}) {

  return (
    <div style={{ margin: "20px 0" }}>
       <label >Status Filter: </label> 
       <select value={filterStatus} onChange={(event)=> setFilterStatus(event.target.value)}>
        <option value="All">All</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknowm">Unknown</option>
       </select>
    </div>
  )
}

export default Filter