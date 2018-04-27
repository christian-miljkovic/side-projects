pragma solidity ^0.4.17;

contract Adoption {

  //this is an array of Ethereum addresses
  address[16] public adopters;


  function adopt(uint petId) public returns (uint){
    require(petId >= 0 && petId <= 15);

    adopters[petId] = msg.sender;

    //return this as confirmation
    return petId;
  }

  //making 16 API calls is not ideal so we will make a function that returns
  //the entire array of adopters
  function getAdopters() public view returns (address[16]){
    return adopters;
  }

}
