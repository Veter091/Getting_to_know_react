import { useState } from 'react'
import {PEOPLE} from './People.js'
import { USER } from './Components/User/User.js'
import { USERS } from './Components/User/Users.js'
import UserProfile from './Components/User/User.jsx'
import './App.css'

function App() {

  return (
    <>
      <div className="people-container">
        <ul className='people-ul'>
        {PEOPLE.map(people => 
        <li className='people-li' key={people}>{people}</li>
        )}
        </ul>
      </div>

      <div className="user-container">
        <UserProfile user={USER}/>
      </div>

      <div className="users-container">
        {USERS.map(elem => 
          <UserProfile
          key={elem.id}
          user={elem}
          />
        )}
      </div>

    </>
  )
}

export default App
