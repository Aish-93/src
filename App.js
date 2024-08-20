import "./App.css";
import Flowchart from "./components/Flowchart";
import Page from "./components/Page";
import Sunchart from "./components/Sunchart";

function App() {
  return (
    <div className="App">
      {/* <Page /> */}
      <Sunchart />
      <Flowchart />
    </div>
  );
}

export default App;
