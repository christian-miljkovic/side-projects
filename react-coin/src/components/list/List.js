import React from 'react';

//in curly braces because we didn't export default
import {handleResponse} from '../../helper';
import {API_URL} from '../../config';
import './Table.css';

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
      error: null,
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
    if(this.state.loading){
      return <div>Loading...</div>;
    }
    else{
      //console.log(this.state.currencies);
      return(
        <div className="Table-container">

          <table className="Table">
            <thead className="Table-head">
              <tr>
                <th>Cryptocurrency</th>
                <th>Price</th>
                <th>Market Cap</th>
                <th>24H Change</th>
              </tr>
            </thead>
            <tbody className="Table-body">
              {this.state.currencies.map((currency)=>(
                //map takes an array and performs a function on it
                //where currency is a single object looping through the array
                <tr key={currency.id}>
                  <td>
                    <span className="Table-rank">{currency.rank}</span>
                    {currency.name}
                  </td>
                  <td>
                    <span className="Table-dollar">{currency.price}</span>
                  </td>
                  <td>
                    <span className="Table-dollar">{currency.marketCap}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }

}

//then you can import it into index.js as List
export default List;
