
import React from 'react'

function Players({name, id, status, created, image}) {
  return (
    <div>
      <h3 style={{ color: "red" }}>Character: {name}</h3>
      <p>ID: {id}</p>
      <p>Status: {status}</p>
      <p>Created: {created}</p>
      <img src={image} alt={`${name} Image`} />
    </div>
  );
}

export default Players