import React from 'react';

//gives the ability to render within the root
import ReactDOM from 'react-dom';
import Header from './components/common/Header.js';

//remember since this is in the root directory you only do ./
import List from './components/list/List';
import './index.css';

//this is a functional component
const App = () => {
  const title = 'React Coin';
  return(
    <div>

        <Header />
        <List />
    </div>
  );
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
