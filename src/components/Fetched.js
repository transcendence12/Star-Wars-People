import React from 'react';
import { MdFavorite } from 'react-icons/md';
import { GiReturnArrow } from 'react-icons/gi';

const Fetched = ({person}) =>{

  return(
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
        <h2 className='name'>{person.name}</h2>
        <button className='block'><MdFavorite /></button>
        <button className='block'><GiReturnArrow /></button>
        <i></i>
        </div>
        <div className='card-back'>
          <h1>{person.name}</h1>
          <ul>
            <li>
              <strong>Birth year:</strong> {person.birth_year}
            </li>
            <li>
              <strong>Gender:</strong> {person.gender}
            </li>
            <li>
              <strong>Eye color:</strong> {person.eye_color}
            </li>
            <li>
              <strong>Mass:</strong> {person.mass}
            </li>
            <li>
              <strong>Height:</strong> {person.height}
            </li>
            <button><MdFavorite /></button>
          </ul>
        </div>
      </div>
    </div>
  )

}
export default Fetched;