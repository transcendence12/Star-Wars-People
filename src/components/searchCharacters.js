import React from "react";
// import PersonCard from "./personCard";

// export default function SearchCharacters(){


//     const searchCharacters = async (e) => {
//         e.preventDefault();

//         const page = '';
//         const url = `https://swapi.dev/api/people/?search=${query}&page=${page}`;
        
//         try {
//             const res = await fetch(url);
//             const data  = await res.json();
//             console.log(data.results);
//             setPeople(data.results);
//         }catch(err){
//             console.error(err);
//         }

//     }

    // return (
    //     <div>
    //         <form className="form" onSubmit={searchCharacters}>
    //             <label className="label" htmlFor="query">Search by Character Name</label>
    //             <input className="input" type="text" name="query"
    //                 placeholder="Enter..." 
    //                 value={query} 
    //                 onChange={(e) => setQuery(e.target.value)}/>
    //             <button className="button" type="submit">Search</button>
    //         </form>
    //         <div className="card-list">
    //              {people.map(person => 
    //             <PersonCard person={person} key={person.id} />
    //             )}
    //         </div>
    //     </div>
    // )
// }