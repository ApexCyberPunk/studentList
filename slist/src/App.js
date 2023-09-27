
import React, {useState} from 'react'
import './components/index.css'
import Data from './components/data'
import List from './components/list'


function App() {
  const [people, setPeople] = useState(Data)
  return (

    <>
    <div className="container">
    <h3># of Students = {people.length}</h3>
    <List people={people}/>
      
    </div>
    </>

  )
  }

export default App;
