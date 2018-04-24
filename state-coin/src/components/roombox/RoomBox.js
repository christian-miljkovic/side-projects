import React from 'react';
import apartmentImg from "./apartment.png"
import './RoomBox.css';

/*
Think about maybe just focusing on having the functionality be there than the
responsive front end. Re-evaluate and plan this out more.
*/


class RoomBox extends React.Component{

  render(){
    return(
      <div className="room-box-container">
          <h3>New York</h3>
          <img className="img-left" src={apartmentImg} alt={"apartmentImg"} />
      </div>

    );
  }
}


export default RoomBox;
