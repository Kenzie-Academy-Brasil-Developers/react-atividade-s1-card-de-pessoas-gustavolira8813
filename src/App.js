import logo from "./logo.svg";
import "./App.css";
import "./components/PersonCard";
import PersonCard from "./components/PersonCard";
function App() {
  let devs = {
    name: ["João", "Gustavo", "Lira"],
    age: [20, 28, 32],
    country: ["França", "Brasil", "EUA"],
  };
  return (
    <div className="App">
      <div className="App-div">
        <h1>Devs Disponíveis</h1>
        <PersonCard
          name={devs.name[0]}
          age={devs.age[0]}
          country={devs.country[0]}
        />
        <PersonCard
          name={devs.name[1]}
          age={devs.age[1]}
          country={devs.country[1]}
        />
        <PersonCard
          name={devs.name[2]}
          age={devs.age[2]}
          country={devs.country[2]}
        />
      </div>
    </div>
  );
}

export default App;
