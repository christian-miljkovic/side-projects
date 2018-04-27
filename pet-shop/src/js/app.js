App = {
  web3Provider: null,
  contracts: {},

  init: function() {
    // Load pets this is a jQuery method that loads JSON data
    //from a server using a GET HTTP request
    $.getJSON('../pets.json', function(data) {
      var petsRow = $('#petsRow');
      var petTemplate = $('#petTemplate');

      for (i = 0; i < data.length; i ++) {
        petTemplate.find('.panel-title').text(data[i].name);
        petTemplate.find('img').attr('src', data[i].picture);
        petTemplate.find('.pet-breed').text(data[i].breed);
        petTemplate.find('.pet-age').text(data[i].age);
        petTemplate.find('.pet-location').text(data[i].location);
        petTemplate.find('.btn-adopt').attr('data-id', data[i].id);

        petsRow.append(petTemplate.html());
      }
    });

    return App.initWeb3();
  },

  initWeb3: function() {
    //is there an injected web3 instance?
    if(typeof web3 !== 'undefined'){
      App.web3Provider = web3.currentProvider;
    }
    else{
      // if no injected web3 instance then fall back to Ganache
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
    }
    web3 = new Web3(App.web3Provider);

    return App.initContract();
  },

  initContract: function() {
    $.getJSON('Adoption.json', (data)=>{
      // get the necessary contract artifcat file and instantiate it with truffle-contract
      const AdoptionArtifact = data;

      //here you are adding to param contracts the Adoption contract
      //wrapped in the Truffle Contract
      App.contracts.Adoption = TruffleContract(AdoptionArtifact);

      App.contracts.Adoption.setProvider(App.web3Provider);

      return App.markAdopted();
    });

    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '.btn-adopt', App.handleAdopt);
  },

  markAdopted: function() {


    App.contracts.Adoption.deployed()
    .then((instance)=>{


      //this I am assuming is taking the instance of the Adoption contract
      //and then calling the getAdopters method
      return instance.getAdopters.call();
    })
    .then((adopters) => {
      adopters.forEach((adopter)=>{
        //meaning if the element in the array is not filled with a name
        //this is the value that sits in an empty index of an array
        if(adopter !== '0x0000000000000000000000000000000000000000'){
          //this disables the adopt button and changes the text to success
          console.log('Success');
          $('.panel-pet').eq(i).find('button').text('Success').attr('disabled', true);
        }
      });
    })
    .catch((err)=>{
      console.log(err.message);
    });
  },

  handleAdopt: function(event) {
    event.preventDefault();

    const petId = parseInt($(event.target).data('id'));

    let adoptionInstance = null;

    //returns a list of accounts the node controls
    web3.eth.getAccounts((error,accounts)=>{
      if(error){
        console.log(error);
      }
      //returns the first account of the node
      const account = accounts[0];

      App.contracts.Adoption.deployed()
      .then((instance)=>{


        //Execute adopt as a transaction by sending account
        //Transactions require a "from" address and have a cost
        //paid in ether called gas, when we use a method in a smart contract like adopt
        return instance.adopt(petId,{from:account});
      })
      .then((result)=>{

        //the result is a transaction object
        //marks the button with success and disables it

        return App.markAdopted();
      })
      .catch((err)=>{
        console.log(err.message);
      });
    });

  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
