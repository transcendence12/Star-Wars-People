import React, { useEffect, useState } from "react";
// import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import axios from 'axios';
// import NotFound from "./components/NotFound";
// import FavoritesPage from "./components/FavoritesPage";
import Header from "./components/Header";
import SearchCharactrs from "./components/SearchCharacters";
import Home from "./pages/Home";
// import Details from "./components/Details";
// import Pagination from "./components/Pagination";
import "./App.css";

function App() {
  // let activeClassName = "nav-active";
  const [starWarsPeople, setStarWarsPeople] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [peoplePerPage] = useState(10);

  useEffect(() => {
    
    function getAllStarWarsPeople(){
      let people = [];
      return axios("https://swapi.dev/api/people/")
        .then(response => {
          people = response.data.results;
          return response.data.count;
        })
        .then(count => {
          const numberOfPageLeft = Math.ceil((count-1) / 10);
          let promises = [];
          for (let i = 2; i<= numberOfPageLeft; i++){
            promises.push(axios(`https://swapi.dev/api/people?page=${i}`));
          }
          return Promise.all(promises);
        })
        .then(response => {
          people = response.reduce((acc, data) => [...acc, ...data.data.results], people);
          return people;
          // console.log(people, people.length)
        })
        .catch(error => console.log("handle error here"));
    }
    (async () => {
      const starWarsPeople = await getAllStarWarsPeople();
      // console.log(starWarsPeople[0], starWarsPeople.length);
      setStarWarsPeople(starWarsPeople)
    })();
    localStorage.setItem('starWarsPeople', JSON.stringify(starWarsPeople));
    // try{
    //   const url = 'https://swapi.dev/api/people/';
    //   fetch(url)
    //   .then(response => {
    //     return response.json()

    //   })
    //   .then(data => {
    //     // console.log(data);
    //     setPeople(data.results);
    //     setCurrentPage()
        
    //   })
      
    // }catch(error) {
    //   console.error("error",error);
    // }

  }, [starWarsPeople]);
  // w tablicy up w useEffect ma być starWarsPeople ale sie zapętla

  // const indexOfLastPerson = currentPage * peoplePerPage;
  // const indexOfFirstPerson = indexOfLastPerson - peoplePerPage;
  // const currentPeople = people.slice(indexOfFirstPerson, indexOfLastPerson);
  // const currentPeople = starWarsPeople.slice(indexOfFirstPerson, indexOfLastPerson);
  // console.log(typeof indexOfFirstPerson, typeof indexOfLastPerson);
  // console.log(typeof currentPeople);
  // const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    // <BrowserRouter>
      <div className="container">
        {/* <Pagination
            peoplePerPage={peoplePerPage}
            totalPeople={starWarsPeople.length}
            paginate={paginate}
          /> */}
        <Header/>
        {/* <nav className="navigation">
          <NavLink to="" className={({ isActive }) => isActive && activeClassName}>Home</NavLink>
          <NavLink to="/favorites" className={({ isActive }) => isActive && activeClassName}>Favorites</NavLink>
        </nav>
        <Routes>
          <Route path='/' element={App}/>
          <Route path='/favorites' element={<FavoritesPage/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes> */}
        <main className="container-content">
          <h1 className="title">Star Wars Characters Search</h1>
          <SearchCharactrs/>
        </main>
        <Home />
        {/* <section className="cards">
          {starWarsPeople && starWarsPeople.map((person) => {
              return <Details person={person} key={person.name} className="list-item"/>;
            })}
        </section> */}
        {/* <section className="cards">
          {people && people.map((person) => {
              return <Details person={person} key={person.name} starWarsPeople={currentPeople} people={currentPeople} className="list-item"/>;
            })}
        </section> */}

      </div>
    // </BrowserRouter>
  );
}

export default App;
