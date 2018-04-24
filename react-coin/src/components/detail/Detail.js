import React from 'react';
import { API_URL } from '../../config.js';
import Loading from '../common/Loading.js';
import { handleResponse, renderChangePercent } from '../../helper.js';
import './Detail.css';

//since we are going to need to use State and life cycle hooks we are going
//to make this component using classes
class Detail extends React.Component{
  constructor(){
    super();

    this.state = {
      currency: {},
      loading: false,
      error: null,
    }
  }

  //again AJAX requests are done through the componentDidMount method
  componentDidMount(){
    const currencyID = this.props.match.params.id;
    this.setState({loading: true});

    fetch(`${API_URL}/cryptocurrencies/${currencyID}`)
    .then(handleResponse)
    .then((currency) => {
      this.setState({loading:false,error:null,currency:currency});
    })
    .catch((err) => {
      this.setState({loading:false,error:err.errorMessage});
    })
  }

  render(){

    const { loading, error, currency } = this.state;

    // render only loading component if loading componenet is set to withRouter
    if(loading) {
      return <div className="loading-container"><Loading /></div>
    }

    if(error){
      return <div className="error">{error}</div>
    }

    return (
      <div className="Detail">
        <h1 className="Detail-heading">
          {currency.name} ({currency.symbol})
        </h1>

        <div className="Detail-container">
          <div className="Detail-item">
            Price <span className="Detail-value">$ {currency.price}</span>
          </div>
          <div className="Detail-item">
            Rank <span className="Detail-value">{currency.rank}</span>
          </div>
          <div className="Detail-item">
            24H Change
            <span className="Detail-value">{renderChangePercent(currency.percentChange24h)}</span>
          </div>
          <div className="Detail-item">
            <span className="Detail-title">Market cap</span>
            <span className="Detail-dollar">$</span>
            {currency.marketCap}
          </div>
          <div className="Detail-item">
            <span className="Detail-title">24H Volume</span>
            <span className="Detail-dollar">$</span>
            {currency.volume24h}
          </div>
          <div className="Detail-item">
            <span className="Detail-title">Total supply</span>
            {currency.totalSupply}
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
