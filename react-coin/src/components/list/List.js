import React from 'react';

//in curly braces because we didn't export default
import {handleResponse} from '../../helper';
import {API_URL} from '../../config';
import Table from './Table.js';
import Loading from '../common/Loading.js';
import Pagination from './Pagination.js';

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
      totalPages: 0,
      page: 1,
    }

    //this.handlePaginationClick = this.handlePaginationClick.bind(this);
  }

  componentDidMount(){
    this.fetchCurrencies();
  }

  fetchCurrencies(){
    this.setState({loading:true});

    const { page } = this.state;

    //sending ajax request to the API using the fetch method
    //this is a template literal
    fetch(`${API_URL}/cryptocurrencies?page=${page}&perPage=20`)

    //takes a function that we have defined in helper.js
    .then(handleResponse)
    .then((data) => {

      this.setState({currencies: data.currencies, loading:false, totalPages:data.totalPages});
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

  //we create this method here because we have to pass the state data
  //to the pagination component through props
  //by default methods aren't bound by default, therefore when we use this
  //within the function we don't get to keep the value of the state when we pass the function
  //through as a prop to Pagination to fix that instead of having just handlePaginationClick(direction) we do
  handlePaginationClick = (direction) => { //this binds the this value to List object or we can set it in the constructor and bind it there

    let nextPage = this.state.page;

    // Increment nextPage if direction variable is next, otherwise decrement
    nextPage = direction === 'next' ? nextPage + 1 : nextPage - 1;

    this.setState({ page: nextPage }, () => {
      // call fetchCurrencies function inside setState's callback
      // because we have to make sure first page state is updated
      //this is because setState is asynchronous which is why we place it in here 
      this.fetchCurrencies();
    });
  }

  render(){

    //if we do this then we can do loading, currencies, error instead
    //of having to do this.state.loading for example
    const {loading, error, currencies, page, totalPages} = this.state;

    if(this.state.loading){
      return <div className="loading-container"><Loading /></div>;
    }

    else{
      //console.log(this.state.currencies);
      // console.log(this.state.currencies.percentChange24);
      return(
        //this data will now be available to the Table component
        <div>
          <Table
            renderChangePercent={this.renderChangePercent}
            currencies={currencies}
          />
          <Pagination page={page} totalPages={totalPages} handlePaginationClick={this.handlePaginationClick}/>
        </div>
      );
    }
  }

}

//then you can import it into index.js as List
export default List;
