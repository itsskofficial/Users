import User from "./components/Users/User";

const App = () => {
  users = [
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
    <div>
      <Users user={users[0]}>
      </Users>

    </div>
  );
}

export default App;
