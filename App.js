import User from "./components/Users/User"
import NewUser from "./components/Users/NewUser"
import Card from './components/UI/Card'
import './index.css'
import { useState } from "react"

const App = () => {

  let users = [
    {
      key:Math.random(),
      name: 'Sarthak',
      age: 19
    },
    {
      key:Math.random(),
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
        <User user={user} key={user.key}>
        </User>
      ))}
    </div>
  );
}

export default App
