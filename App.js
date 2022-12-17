import User from "./components/Users/User"
import NewUser from "./components/Users/NewUser"
import Card from './components/UI/Card'
import './index.css'
import { useState } from "react"

const App = () => {

  let users = [
    {
      name: 'Sarthak',
      age: 19
    },
    {
      name:'Ojaswini',
      age:19
    }
  ]

  const [usersList, setUsersList] = useState(users)
  
  const addNewUser = (user) => {
    setUsersList((previousUsers) => {
      return [user,...previousUsers]
    })
  }

  
  return (
    <div className='container'>
      <Card className='new-user-container'>
        <NewUser >
        </NewUser>
      </Card>
      <User user={users[0]}>
      </User>
      <User user={users[1]}>
      </User>
    </div>
  );
}

export default App
