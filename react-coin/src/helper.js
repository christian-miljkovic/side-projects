//creating a response file so that we can use this code repeatedly
//Fetch error helper
export const handleResponse = (response) => {
  return response.json().then(json => {
    //check to make sure that the data came back correctly
    //if it does then it returns json, otherwise rejects it
    return response.ok ? json : Promise.reject(json);
  });
}
