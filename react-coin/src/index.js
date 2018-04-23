import React from 'react';

//gives the ability to render within the root
import ReactDOM from 'react-dom';
import Header from './components/common/Header.js';
import NotFound from './components/notfound/NotFound.js';
import Detail from './components/detail/Detail.js';

//BrowserRouter is a type of router, there is also HashRouter that is only
//really used if we know our application will only serve static files
//Route component is the main building block, anywhere we want to render we create
//a Route component. Switch component is used to group together routes, and we do all of this
//within app component
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//remember since this is in the root directory you only do ./
import List from './components/list/List';
import './index.css';

//this is a functional component
const App = () => {
  const title = 'React Coin';
  return(
    <BrowserRouter>
      <div>
        <Header />

        <Switch>
          <Route path="/" component={List} exact/>
          <Route path="/currency/:id" component={Detail} exact/>
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

//use the render method given by the ReactDOM import
ReactDOM.render(
  //then in this case you want to place what you want to render
  //this is how you render components
  <App />,
  document.getElementById('root')
);
