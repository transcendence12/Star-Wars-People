import React, {useState} from 'react';

export default function Fetched(){

  const [people, setPeople] = useState([]);

  const fetchAll = async()=> {
      const urls = [
        "https://swapi.dev/api/people/1/",
        "https://swapi.dev/api/people/2/",
        "https://swapi.dev/api/people/3/",
        "https://swapi.dev/api/people/4/",
        "https://swapi.dev/api/people/5/",
        "https://swapi.dev/api/people/6/",
        "https://swapi.dev/api/people/7/",
        "https://swapi.dev/api/people/8/",
        "https://swapi.dev/api/people/9/"
      ]

      try {
        const response = await Promise.all(urls.map((url) => fetch(url).then((response) => response.json()
        )));
    
        console.log(response);
      } catch(error) {
          console.error("error",error);
        }

    setPeople(people);
  } 

  return(
    <div>
      <div className="card-list" {...fetchAll()}>
        {people.map(person => 
        <div person={person.name} key={person.id} />
        )}
      </div>
    </div>
  )

}