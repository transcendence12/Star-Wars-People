
import React, {useState} from 'react';
import logo from './logo.svg';
// import SearchCharactrs from "./components/searchCharacters";
import Fetched from './components/Fetched';
import './App.css'

function App() {
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
        setPeople(response);
      } catch(error) {
          console.error("error",error);
        }
  } 
    fetchAll()




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <ul>
            <li><a href="/" className="first-item">Characters</a></li>
            <li><a href="/">Favorites</a></li>
          </ul>
        </nav>
      </header>
      <main className="container">
        <h1 className="title">Star Wars Characters Search</h1>
        {/* <SearchCharactrs/> */}
      </main>
      {people.map((person) => {
        return <Fetched person={person} key={person.name}/>
      })}
    </div>
  );
  }


export default App;
