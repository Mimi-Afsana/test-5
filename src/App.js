import { Button, Spinner } from "react-bootstrap";
import "./App.css";
import CardGroup from "./components/Component/CardGroup";
import CardGroup2 from "./components/Component/CardGroup2/CardGroup2";
import Navbar from "./components/Component/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <h2>using react bootstrap</h2>
      <Button variant="danger">my button</Button>
      <br />
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <CardGroup2></CardGroup2>
    <Navbar></Navbar>
    </div>
  );
}

export default App;
