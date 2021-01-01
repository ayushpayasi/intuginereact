import logo from './assets/logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import profile from './assets/profile.svg'

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-light navbar-expand-md bg-light justify-content-center">
  <a href="/" className="navbar-brand d-flex w-50 mr-auto">
    <img src={logo} alt="logo" style={{width : '40px'}}/>
  intugine
  </a>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
      <span className="navbar-toggler-icon"></span>
  </button>
  <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
      <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
          <li className="nav-item">
              <a className="nav-link font-weight-bold" href="#">Home</a>
          </li>
          <li className="nav-item">
              <a className="nav-link font-weight-bold" href="#">Brands</a>
          </li>
          <li className="nav-item">
              <a className="nav-link font-weight-bold" href="#">Transporters </a>
          </li>
          <li className="circle-icon">
            <img src={profile} alt="logo" style={{width : '30px'}}/>
          </li>
      </ul>
  </div>
</nav>

<br/>
<div className="container">
  <div className= "row">
    
    <div className="col-3"></div>

      <div className="col-sm">
        
        <div className="row">
          <div className="col-sm square">
           DEL
          </div>
          <div className="col-sm square">
            INT
          </div>
          <div className="col-sm square">
            OOD
          </div>
          <div className="col-sm square">
            DEX
          </div>
          <div className="col-sm square">
            NFI
          </div>    
        
        </div>
      
      </div>
    
     <div className ="col-3"></div>
  
    </div>  
</div>

<br/>


    </div>
  );
}

export default App;
