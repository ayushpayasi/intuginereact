import React ,{Component} from 'react'

export default class Table extends Component{
    render(){
        return (
            <div className="row"> 
                <div className="col-4"></div>
                <div className="col-8">
                    <div className="table-responsive table-bordered table-sm">
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th>head</th>
                                    <th>head</th>
                                    <th>head</th>
                                    <th>head</th>
                                    <th>head</th>
                                    <th>head</th>
                                    <th>head</th>
                                    <th>head</th>
                                </tr>
                            </thead>
                            <tbody>
                            
                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>
        )
    }
} 
