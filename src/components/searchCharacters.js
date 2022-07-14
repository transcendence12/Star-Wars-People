import React, { useState } from "react";

export default function SearchCharacters({query, people}){


    const searchCharacters = async (e) => {
        e.preventDefault();
        const [people, setPeople] = useState([]);
        const [query, setQuery] = useState('');

        const page = '';
        const url = `https://swapi.dev/api/people/?search=${query}&page=${page}`;
        
        try {
            const res = await fetch(url);
            const data  = await res.json();
            console.log(data.results);
            setPeople(data.results);
            
        }catch(err){
            console.error(err);
        }
        setPeople(people);
        setQuery()
    }

    return (
        <div>
            <form className="search" onSubmit={searchCharacters}>
                <label className="label" htmlFor="query"></label>
                <input className="form-control" type="text" name="query"
                    placeholder="Search characters" 
                    value={query} 
                    // onChange={(e) => setQuery(e.target.value)}
                    autoFocus/>
                <button className="btn-search" type="submit">Search</button>
            </form>
            {/* <div className="card-list">
                 {people && people.map(person => 
                <PersonCard person={person} key={person.id} />
                )}
            </div> */}
        </div>
    )
}
