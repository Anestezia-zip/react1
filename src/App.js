import "./App.css";
import CommentComponent from "./components/Forms/CommentComponent";
import UserComponent from "./components/Forms/UserComponent";
import CreateUserForm from "./components/Forms/CreateUserForm";


const App = () => {
  return (
    <div className="App">
      <UserComponent/>
      <CommentComponent/>
    </div>
  );
};

export default App;
