import React ,{Component} from 'react'
import warehouse from '../assets/warehouse.svg'
import destination from '../assets/destination.svg'

export default class Table extends Component{
    constructor(props) {
        super(props);
        this.state = {
            message: 'Please Select a shipment ..... '
        }
      }
    getID = (id)=>{
        let status = null 
        for (var val in this.props.arr){if(this.props.arr[val]._id === id){ status = this.props.arr[val].scan}}
        this.setState({ message: status.map(atr => {return (<div className="box2"> <div> {atr.status_detail}</div> <div>{atr.time} </div> </div> )})})
        

    }

    render(){
        const {message} = this.state
        return (
            <div className="row"> 
                <div className="col-4">
                    <div className="overflow-auto box"> 
                        <div className = "row"> 
                        <div className="col-2">
                            <img className = "pos2" src={destination} alt="logo" style={{width : '30px' ,height: '20px'}}/> 
                            <div class="vl"></div>
                            <img className = "pos" src={warehouse} alt="logo" style={{width : '30px', height: '20px'}}/> 
                        </div> 
                        <div className="col-10"> <div className="overflow-auto m-1">{this.state.message} </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-8">
                    <div className="table-responsive tableFixHead table-sm">
                        <table className="table table-hover">
                            <thead className="thead-light">
                                <tr className="table-row"> <th>AWB NUMBER</th>
                                <th> TRANSPORTER</th>
                                <th> SOURCE </th>
                                <th> DESTINATION</th>
                                <th> START DATE</th>
                                <th> ETD </th>
                                <th> STATUS </th>
                                </tr>        
                            </thead>
                            <tbody>        
                            { this.props.arr.map(atr => { return(<tr onClick={() => this.getID(atr._id)} className = {atr.current_status === 'Delivered' ?  'text-success' :atr.current_status === 'Undelivered' ? 'text-danger': 'text-warning'} 
                            key ={atr._id} id={atr._id} oncl >
                                <td>{atr.awbno}</td>
                                <td>{atr.carrier}</td>
                                <td>{atr.from}</td>
                                <td>{atr.to}</td>
                                <td>{atr.pickup_date}</td>
                                <td>{atr['extra_fields'] === undefined ? null : atr.extra_fields.expected_delivery_date }</td>
                                <td>{atr.current_status}</td>
                            </tr>)})}

                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>
        )
    }
} 
