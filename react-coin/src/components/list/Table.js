import React from 'react';
import './Table.css';
import PropTypes from 'prop-types';


//now props/or currecnies in this case will be available
const Table = (props) => {

  //you can do deconstructing by doing
  //then you can remove props
  //const { currencies, renderChangePercent } = props;

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
          {props.currencies.map((currency)=>(
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
              <td>
                {props.renderChangePercent(currency.percentChange24h)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

}

//this is how you place prop type validators in order to check that you
//are passing the correct data to the components
Table.propTypes = {
  currencies: PropTypes.array.isRequired,
  renderChangePercent: PropTypes.func.isRequired,
}

export default Table;
