import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom'
import NotFound from "./components/NotFound";
import FavoritesPage from "./components/FavoritesPage";
import Header from "./components/Header";
import SearchCharactrs from "./components/SearchCharacters";
import Fetched from "./components/Fetched";
import Pagination from "./components/Pagination";
import "./App.css";

function App() {
  let activeClassName = "nav-active";
  const [people, setPeople] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [peoplePerPage] = useState(2);

  useEffect(() => {
  
    try{
      const url = 'https://swapi.dev/api/people/';
      fetch(url)
      .then(response => {
        return response.json()

      })
      .then(data => {
        // console.log(data);
        // setPeople(data.results);
        setCurrentPage()
        
      })
      
    }catch(error) {
      console.error("error",error);
    }

  }, []);

  const indexOfLastPerson = currentPage * peoplePerPage;
  const indexOfFirstPerson = indexOfLastPerson - peoplePerPage;
  const currentPeople = people.slice(indexOfFirstPerson, indexOfLastPerson);
  console.log(typeof indexOfFirstPerson, typeof indexOfLastPerson);
  console.log(typeof currentPeople);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <BrowserRouter>
      <div className="container">
        <Header/>
        <nav className="navigation">
          <NavLink to="" className={({ isActive }) => isActive && activeClassName}>Home</NavLink>
          <NavLink to="/favorites" className={({ isActive }) => isActive && activeClassName}>Favorites</NavLink>
        </nav>
        <Routes>
          <Route path='/'/>
          <Route path='/favorites' element={<FavoritesPage/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <main className="container-content">
          <h1 className="title">Star Wars Characters Search</h1>
          <SearchCharactrs/>
        </main>
        <section className="cards">
          {people && people.map((person) => {
              return <Fetched person={person} key={person.name} people={currentPeople} className="list-item"/>;
            })}
        </section>
          <Pagination
            peoplePerPage={peoplePerPage}
            totalPeople={people.length}
            paginate={paginate}
          />
      </div>
    </BrowserRouter>
  );
}

export default App;
