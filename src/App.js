import "./index.css";
import Color from "./components/Color";

function App() {
  return (
    <div className="App">
      <div className="column">
        <Color curve="30px 0px 30px 30px" />
        <Color curve="0px 30px 30px 0px" />
      </div>
      <div className="column">
        <Color curve="30px 0px 30px 0px" />
        <Color curve="30px 0px 30px 30px" />
      </div>
      <div className="column">
        <Color curve="30px 30px 0px 0px" />
        <Color curve="30px 0px 30px 30px" />
      </div>
    </div>
  );
}

export default App;
