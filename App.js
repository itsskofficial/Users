import User from "./components/Users/User"
import NewUser from "./components/Users/NewUser"
import './com'
import './index.css'

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
  return (
    <div className='container'>
      <Card className='new-user-container'>
        <NewUser>
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
