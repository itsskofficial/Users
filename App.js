import User from "./components/Users/User"
import NewUser from "./components/Users/NewUser"
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
      <NewUser>
      </NewUser>
      <User user={users[0]}>
      </User>
      <User user={users[1]}>
      </User>
    </div>
  );
}

export default App;
