
import React from 'react'

function Sort({sortOrder, setSortOrder}) {
  return (
    <div style={{ margin: "20px 0" }}>
        <label >Sort By Name: </label>
        <select value={sortOrder} onChange={(event)=> setSortOrder(event.target.value)}>
            <option value="default">Default</option>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
        </select>
    </div>
  )
}

export default Sort