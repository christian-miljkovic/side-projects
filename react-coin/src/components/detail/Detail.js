import React from 'react';
import { API_URL } from '../../config.js';
import { handleResponse } from '../../helper.js';
import './Detail.css';

//since we are going to need to use State and life cycle hooks we are going
//to make this component using classes
class Detail extends React.Component{

  //again AJAX requests are done through the componentDidMount method
  componentDidMount(){

  }

  render(){
    return(
      <div>Detail</div>
    );
  }
}

export default Detail;
