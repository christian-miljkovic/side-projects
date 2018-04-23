# Notes

## Tooling and Environment Setup
* Download language babel for ES6 Javascript, this package provides language grammar, JSX syntax, automatic indentation, and much more repository located here: https://atom.io/packages/language-babel
* Install React Dev tools for Chrome so that you can inspect the Components when developing
* run npm install which will then install the dependencies from package.json
* Dev dependencies are only for development not used for production, whereas dependencies is used for production
* react-scripts, allows you to do "create react-app", it sets up babel that compiles our ES6 and JSX into older javascript, configures web pack which is a modular bundler that puts our code and all its dependencies into one javascript file in correct order, which means we don't have to include scripts in html files, we can just import them

## Rendering React Components
* To do this you need to import React from 'react' into your index.js
* You can write components as functions where you have
  function App() {} or const App = () => {}
* The root dom node is important because everything inside it will be managed by react-dom
* In order to give the app component the ability to render inside the root-dom

## Component UI with JSX
* you use className instead of class
* You cannot return two separate elements you have to have them within a parent element
* If you put it in {} you can then put in variables like const title = 'React Coin' then put <h1>{title}</h1>
* Remember each single component you create you must have import React from 'react';
* the convention is to name the component with a capital letter, and you declare it like a function
* within the return, when returning lets say a div you have to put it inside return()
* then you can export the component so that you can then later import it into your lets say index.js file

## Styling React Components
* typically you will want to have separate css files for each component
* you can do inline objects with camel case as well

## State and Lifecycle
* Every time we make a component you have to import 'react';
* For simple presentational presentation components its better to use functional components, whereas use class ones when using states
* States allow us to make our components dynamic and reactive
* you have to have the class constructor method, and if the class is a subclass we have to use the super() method and since all components are subclasses of React.Component you must do it
* React Lifecycle hooks, or methods which help us run code in particular times during the process
* Ajax calls done in componentDidMount and componentWillMount which occur after and before rendering

## Ajax with fetch and displaying state
* Popular AJAX libraries are like jQuery
* fetch to send ajax request, fetch will only be able to detect network issues, however we can use the ok flag
* root api in one place then import, then use config.js file
* You have to give a unique key to each child element because it allows React to then identify which items have changed, best way to do this is pick a string that unique. This happens when you are looping through an array an making new children, so to fix this you set the key variable within the div to a unique key
* &uarr; is up arrow
* When you create a method you then can call it within the render method by doing this.methodName
* A loading spinner is something that you have to create as a separate component
* Seems like functional components are the general ones that are only presentational and are common to the entire application, which should then go into common components folder
* There is a key frame setting for CSS that allows you to make it move

## Props and typechecking with PropTypes
* We need a way to pass values that are stored on a state to other components within a state
* props are properties, which you add to a component by adding a custom property within the div of the component
* to use props within a component you have to pass props within the function of the component when you are first declaring it
* essentially these are properties that you can pass to components and then use functions or states or whatever information from one component to another
* props are set by the parent component and are set for
* React has type checking abilities which allows us to check for bugs as the application grows, typically you have to install these however in this specific application we have them in the package.json
* These give us validators in order to check if the data is valid

## Handling Events
* Similar to when you are handling it with dom
* There is an E6 way of declaring certain variables that are in an object like this.state where instead of having to do this.state.currency you can do const { currency } = this.state the you can use just currency
* If you have something in a string like a URL in a string 'http:' you can do 'http:${API_URL}'  
* Paginations require components
* Remember if it is presentational then you make the React component as a function
* Div is a block element, span is inline. divs should be used to wrap section of a document, while spans should be used to wrap small portions of text or images
* <b> is used to bring attention to div
* When dealing with eventHandlers, in the case of the component Pagination if you didn't bind the this to the correct object, it wouldn't work and be called right away
* Bind method creates a new function that when called has its this keyword set to the provided value
* Bind is used to preserve execution context for a function that executes in another context. Essentially, in the case of the Pagination and List example. Because handlePaginationClick function is created in List.js but passed to Pagination.js, we want the correct this value to be Pagination, not undefined

## React Router
* Everything is just components, simplifies it a lot
* We do this in index.js
* We have to wrap Header component and Switch component because Router component will only return one child, therefore if we want header and switch we must place them all in a div
* You can pass components to Router components as well, which probably means you can pass components as props
* you do dynamic path routing by doing :id
* Link can not be a child of anchor div
* higher order components is a function that takes component as a parameter and returns a new one with extended functionality or props
* the push method helps change the URL, that is within the withRouter, which essentially takes the component and wraps it 
