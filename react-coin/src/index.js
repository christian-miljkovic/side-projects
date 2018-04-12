import React from 'react';

//gives the ability to render within the root
import ReactDOM from 'react-dom';

//this is a functional component
const App = () => {
  return <h1> React Coin </h1>;
}

//you can also create class components which have additional features
//they look like this
// class App extends React.component{
//   render(){
//     return <h1> React Coin </h1>;
//   }
// }

//use the render method given by the ReactDOM import
ReactDOM.render(
  //then in this case you want to place what you want to render
  //this is how you render components
  <App />,
  document.getElementById('root')
);
