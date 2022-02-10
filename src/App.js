import React from 'react'
import people from './List'

function App() {
    console.log(people);
  return (<main>
    <h1> Meet Our Friends!</h1>
    <div className="people">{people.map((person)=> (
        <div className="person" key= {person.id}>
          <div className="image">
            <img src={person.img} alt= {person.name}/>
          </div>
          <div className="details">
           <h2>{person.name} </h2>
           <p> {person.age} </p>
           <p>{person.gender} </p>
        </div>
        </div>
    ))}</div>
    </main>
  )
  
}

export default App