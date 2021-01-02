
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Nav from "./components/nav.component"
import Counters from "./components/counters.component"
import Table from "./components/table.component"
// import axios from 'axios'
import PostRequest from "./components/postrequest.component"

function App() {
  return (
    <div className="App">
      <Nav/>
    <br/>
      <Counters/>
    <br/>
      <Table/>
    <br/>
      <PostRequest/>
    </div>
  );
}

export default App;
