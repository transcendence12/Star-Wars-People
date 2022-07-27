import React, { useState, useEffect} from 'react';
import Details from '../components/Details';

const Home = () => {
    const [starWarsPeople, setStarWarsPeople] = useState([]);
    useEffect(() => {
        const starWarsPeople = JSON.parse(localStorage.getItem('starWarsPeople'));
        if (starWarsPeople) {
            setStarWarsPeople(starWarsPeople);
        }
    }, []);

  return (
    <div className='container'>
        <section className="cards">
          {starWarsPeople && starWarsPeople.map((person) => {
              return <Details person={person} key={person.name} className="list-item"/>;
            })}
        </section>
    </div>
  )
}

export default Home