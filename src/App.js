
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Nav from "./components/nav.component"
import Counters from "./components/counters.component"
import Table from "./components/table.component"
// import axios from 'axios'
import PostRequest from "./components/postrequest.component"

function App() {
  // const headers = {'Authorization': "Bearer"+"tTU3gFVUdP"};
  // const body = {'email': "ayushpayasi@gmail.com"};
  // const apiurl ="https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch"
  // let article;
  // axios.post(apiurl)
  //       .then(response => this.setState({ article: response.data }))
      //   .catch(error => {this.setState({ errorMessage: error.message });
      //   console.error('There was an error!', error);
      // });
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
