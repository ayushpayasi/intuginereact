import React ,{Component} from 'react'

export default class Table extends Component{
    // constructor(props){
    //     super(props)
    //     this.state ={
    //         arr : this.props.arr
    //     }
    // }

    // fillTable =(atr)=>{
    //     return(<tr>{for (var val in atr)}<td key ={val}> {atr[val]} </td></tr>)

    // }
    render(){
        return (
            <div className="row"> 
                <div className="col-4">
                    {console.log()}
                </div>
                <div className="col-8">
                    <div className="table-responsive table-bordered table-sm">
                        <table className="table">
                            <thead className="thead-dark">
                                <tr> <th>AWB NUMBER</th>
                                <th> TRANSPORTER</th>
                                <th> SOURCE </th>
                                <th> DESTINATION</th>
                                <th> START DATE</th>
                                <th> ETD </th>
                                <th> STATUS </th>
                                </tr>        
                            </thead>
                            <tbody>
                            { this.props.arr.map(atr =>{ console.log(atr) })
                                    }

                                    
                            { this.props.arr.map(atr => { return(<tr key ={atr._id}>
                                <td>{atr.awbno}</td>
                                <td>{atr.carrier}</td>
                                <td>{atr.from}</td>
                                <td>{atr.to}</td>
                                <td>{atr.pickup_date}</td>
                                <td>{atr.extra_fields.length}</td>
                            </tr>)})}
                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>
        )
    }
} 
