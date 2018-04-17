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
