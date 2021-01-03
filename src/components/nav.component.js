import React , {Component} from 'react';
import '../index.css';
import profile from '../assets/profile.svg'
import logo from '../assets/logo.svg';

export default class Nav extends Component{
    componentDidMount() {
        document.title = 'Intugine';
      }
      
    render(){
        return(
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
        )
    }
}