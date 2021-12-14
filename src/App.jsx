//App.jsx
import "./App.scss";
import Counter from "./componenets/Counter/Counter";
import Employee from "./componenets/EmployeeID/Employee";
import team from "./data/employee";

const App = () => {
  return (
    <div className="App">
      <header className="Greeting">
        <h1 className="greeting__heading">Ticket Tracker</h1>
      </header>
      <div className="App__employee-grid">
      <Employee employees = {team}/> 
      
      </div>     
    </div>
    
  );
};

export default App;
