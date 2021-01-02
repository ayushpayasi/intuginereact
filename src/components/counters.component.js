import React , {Component} from 'react';
import '../index.css';

export default class Nav extends Component{

    render(){
      let delCount = 0
      let intCount = 0
      let oodCount = 0
      let dexCount = 0
      let nfiCount = 0

      console.log(this.props.arr)
      for(var val in Object.values(this.props.arr)){
        if (this.props.arr[val].current_status_code === 'DEL'){delCount +=1}
        else if (this.props.arr[val].current_status_code === 'INT'){intCount +=1}
        else if (this.props.arr[val].current_status_code === 'OOD'){oodCount +=1}
        else if (this.props.arr[val].current_status_code === 'DEX'){dexCount +=1}
        if (this.props.arr[val].current_status_code === 'NFI'){nfiCount +=1}
      } console.log(delCount)
        return(
            <div className="container">
  <div className= "row">
    
    <div className="col-2"></div>

      <div className="col-sm">
        
        <div className="row">
          <div className="col-sm square text-white">
           DEL <br/> {delCount}
          </div>
          <div className="col-sm square text-white">
            INT <br/> {intCount}
          </div>
          <div className="col-sm square text-white">
            OOD <br/> {oodCount}
          </div>
          <div className="col-sm square text-white">
            DEX <br/> {dexCount}
          </div>
          <div className="col-sm square text-white">
            NFI <br/> {nfiCount}
          </div>    
        
        </div>
      
      </div>
    
     <div className ="col-2"></div>
  
    </div>  
    
</div>

        )}}