pragma solidity ^0.4.19;

contract Conference {  // can be killed, so the owner gets sent the money in the end

	address public organizer;
	mapping (address => uint) public registrantsPaid;
	uint public numRegistrants;
	uint public quota;

  constructor() public {
		organizer = msg.sender;
		quota = 100;
		numRegistrants = 0;
	}

	function buyTicket() public payable{
		if (numRegistrants >= quota) {
			revert();
		}
		registrantsPaid[msg.sender] = msg.value;
		numRegistrants++;

	}

	function changeQuota(uint newquota) public {
		if (msg.sender != organizer) { return; }
		quota = newquota;
	}

	function refundTicket(address recipient, uint amount) public {
		if (msg.sender != organizer) { return; }
		if (registrantsPaid[recipient] == amount) {
			address myAddress = this;
			if (myAddress.balance >= amount) {
				recipient.transfer(amount);

				registrantsPaid[recipient] = 0;
				numRegistrants--;
			}
		}
		return;
	}

	function destroy() public {
		if (msg.sender == organizer) { // without this funds could be locked in the contract forever!
			selfdestruct(organizer);
		}
	}
}
