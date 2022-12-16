import Users from "./components/Users/Users";

const App = () => {
  users = [
    {
      name: 'Sarthak',
      age: 19
    },
    {
      name:'Ojaswini',
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
