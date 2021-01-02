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
        const baseurl = 'https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch';
        const op = axios({
            method: 'post',
            url: baseurl,
            headers: {'Authorization': `Bearer `+"tTU3gFVUdP"}, 
            data: {
                "email": "ayushpayasi@gmail.com"
            }
          }).then(response=> { this.setState({data:response.data})}, err => console.log(err))
          
        //   const{data} = this.state
        // console.log(data.length)
    }
    
    render() {
        const { data } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">POST Request with Set Headers</h5>
                <div className="card-body">
                    {console.log(data.length)}
                    {/* {typeof Object.keys(data)} */}
                </div>
                </div>
            
        );
    }
}

export default PostRequest ; 
