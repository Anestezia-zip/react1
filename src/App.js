import "./App.css";
import PostComponent, { LoremPostComponent } from "./components/Posts/PostComponent";

const App = () => {
  return (
    <div className="App">
        <PostComponent />
        <LoremPostComponent />
    </div>
  );
};

export default App;
