//have to import it because within renderChangePercent you
//are using JSX
import React from 'react';

//creating a response file so that we can use this code repeatedly
//Fetch error helper
export const handleResponse = (response) => {
  return response.json().then(json => {
    //check to make sure that the data came back correctly
    //if it does then it returns json, otherwise rejects it
    return response.ok ? json : Promise.reject(json);
  });
}


/*
Render change percent helper function
*/
export const renderChangePercent = (percent) => {
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
