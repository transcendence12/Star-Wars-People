import React from 'react';

const Fetched = ({person}) =>{

  

  return(
    <div>
      <div className="card-list">
        <span>{person.name}</span>
      </div>
    </div>
  )

}
export default Fetched;