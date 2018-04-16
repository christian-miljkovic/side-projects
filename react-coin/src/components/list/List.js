import React from 'react';

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
    //sending ajax request from API
    fetch('https://api.udilia.com/coins/v1/cryptocurrencies?page=1&perPage=20')
    .then(response => {
      return response.json().then(json => {
        return response.ok ? json : Promise.reject(json);
      });
    })
    .then((data) => {

      this.setState({currencies: data.currencies, loading:false});
    })
    .catch((error) => {
      this.setState({error: error.errorMessage, loading: false});
      
    });
  }

  render(){
    if(this.state.loading){
      return <div>Loading...</div>;
    }
    else{
      return(
        <div>text</div>
      );
    }
  }

}

//then you can import it into index.js as List
export default List;
