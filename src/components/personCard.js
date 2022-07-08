import React from 'react';

export default function PersonCard({person}){
    return (
        <div className="card">
          <div className="person-details"> 
            <p>{person.name} <button>Add to ❤</button></p>
              <p>Gender: {person.gender}</p>
              <p>Birth year: {person.birth_year}</p>
              <p>Mass: {person.mass}</p>
              <p>Height: {person.height}</p>
              <p>Eye color: {person.eye_color}</p>
          </div>
        </div>
      )
}