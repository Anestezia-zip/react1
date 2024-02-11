import "./App.css";
import ContextApp from "./components/Users/context/ContextApp";
import PropertyDrillApp from "./components/Users/property-drill/PropertyDrillApp";
import StateLiftingApp from "./components/Users/state-lifting/StateLiftingApp";

const App = () => {
  return (
    <div className="App">
      <PropertyDrillApp/>
      <StateLiftingApp/>
      <ContextApp/>
    </div>
  );
};

export default App;
