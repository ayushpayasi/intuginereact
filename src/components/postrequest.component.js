import React from 'react';
import axios from 'axios';

class PostRequest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }
    
    componentDidMount() {
        const body = { "email": "ayushpayasi@gmail.com" };
        const headers = {'Authorization': `Bearer tTU3gFVUdP`};
        const baseurl = 'https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch';
        const op = axios({
            method: 'post',
            url: baseurl,
            headers: {'Authorization': `Bearer `+"tTU3gFVUdP"}, 
            data: {
                "email": "ayushpayasi@gmail.com"
            }
          }).then(response=> {console.log(response ); console.log("enjoy")}, err => console.log(err))
          console.log(op)
        
    }
    
    render() {
        const { data } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">POST Request with Set Headers</h5>
                <div className="card-body">
                    {data && data.map((data2) =>{const item = JSON.parse(data2); 
                    return(<div  key ={item}> </div>);
                    })} 
                </div>
                </div>
            
        );
    }
}

export default PostRequest ; 
