import React from 'react';

//in curly braces because we didn't export default
import {handleResponse} from '../../helper';
import {API_URL} from '../../config';
import Table from './Table.js';
import Loading from '../common/Loading.js';

class List extends React.Component{

  //class components need to have constructor method
  constructor(){
    super();

    //this is how we create states
    //you never set state directly you use the setState() method
     this.state = {
      //this will indicate whether to show the loading indicator or the table of numbers
      loading: false,
      currencies: [],
      error: 'Something has gone wrong',
    }
  }

  componentDidMount(){
    this.setState({loading:true});
    //sending ajax request to the API using the fetch method
    //this is a template literal
    fetch(`${API_URL}/cryptocurrencies?page=1&perPage=20`)

    //takes a function that we have defined in helper.js
    .then(handleResponse)
    .then((data) => {

      this.setState({currencies: data.currencies, loading:false});
    })
    .catch((error) => {
      this.setState({error: error.errorMessage, loading: false});

    });
  }
  //we need conditional rendering here because if it is above zero
  //it should be green, and red if below with a new render method
  //you then call this in the render method doing this.renderChangePercent
  renderChangePercent(percent){
    if(percent > 0){
      return <span className="percent-raised">{percent}% &uarr;</span>
    }
    else if(percent < 0) {
      return <span className="percent-fallen">{percent}% &darr;</span>
    }
    else{
      return <span>{percent}</span>
    }
  }

  render(){

    //if we do this then we can do loading, currencies, error instead
    //of having to do this.state.loading for example
    const {loading, error, currencies} = this.state;

    if(this.state.loading){
      return <div className="loading-container"><Loading /></div>;
    }

    else{
      //console.log(this.state.currencies);
      // console.log(this.state.currencies.percentChange24);
      return(
        //this data will now be available to the Table component
        <Table
          renderChangePercent={this.renderChangePercent}
          currencies={currencies}/>
      );
    }
  }

}

//then you can import it into index.js as List
export default List;
