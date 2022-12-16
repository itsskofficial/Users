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
      <User user={users[0]}>
      </User>
      <User user

    </div>
  );
}

export default App;
