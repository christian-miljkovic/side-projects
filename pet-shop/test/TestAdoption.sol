pragma solidity ^0.4.17;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Adoption.sol";

contract TestAdoption{

  // here we are now making an instance of this contract and will
  //be able to interact with it
  Adoption adoption = Adoption(DeployedAddresses.Adoption());

  function testUserCanAdoptPet() public {
    //since we know this function returns the correct value
    uint returnedId = adoption.adopt(8);

    uint expected = 8;

    Assert.equal(returnedId, expected, "Adoption of pet ID 8 should be recorded.");
  }

  function testGetAdopterAddressByPetId() public {
    address expected = this;

    //since the array of addresses is public we can access it
    //thats whats happening here, we are using the object adoption then indexing the 8th element in the array
    address adopter = adoption.adopters(8);

    Assert.equal(adopter, expected, "Owner of pet ID 8 should be recorded.");
  }

  function testGetAdopterAddressByPetIdInArray() public {
    address expected = this;

    address[16] memory adopterArray = adoption.getAdopters();

    address adopter = adopterArray[8];

    Assert.equal(adopter, expected, "Owner of pet ID 8 should be recorded.");
  }

}
