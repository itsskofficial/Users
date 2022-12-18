import User from "./components/Users/User"
import NewUser from "./components/Users/NewUser"
import Card from './components/UI/Card'
import './index.css'
import { useState } from "react"

const App = () => {

  let users = [
    {
      key:0,
      name: 'Sarthak',
      age: 19
    },
    {
      key:1,
      name:'Ojaswini',
      age:19
    }
  ]

  const [usersList, setUsersList] = useState(users)
  
  const addNewUserHandler = (user) => {
    setUsersList((previousUsers) => {
      return [user,...previousUsers]
    })
  }

  
  return (
    <div className='container'>
      <Card className='new-user-container'>
        <NewUser onAddUser = {addNewUserHandler}>
        </NewUser>
      </Card>
      {usersList.map((user) => (
        <User user={user}>
        </User>
      ))}
    </div>
  );
}

export default App
