import React from 'react';
import axios from 'axios';
import Counters from "./counters.component"
import Table from "./table.component"




class PostRequest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }

    componentDidMount() {
        const baseurl = 'https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch';
        const op = axios({
            method: 'post',
            url: baseurl,
            headers: {'Authorization': `Bearer `+"tTU3gFVUdP"}, 
            data: {
                "email": "ayushpayasi@gmail.com"
            }
          }).then(response=> { this.setState({data:response.data})}, err => console.log(err))
    }
    
    render() {
        const { data } = this.state;
        return (
            <div className="container">
            <Counters arr = {data}/>
            <br/>
            <Table arr = {data}/>
                </div>
            
        );
    }
    
}

export default PostRequest ; 
