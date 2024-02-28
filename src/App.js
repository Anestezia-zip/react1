import "./App.css";
import UsersComponent from "./components/CustomHook/UsersComponent";
import UseMemoApp from "./components/UseMemo/UseMemoApp";

const App = () => {

  return (
    <div className="App">
        <UseMemoApp />
        <UsersComponent />
    </div>
  );
};

export default App;


