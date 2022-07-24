import React from "react";
export default function TravelCard(props) {
  return (
    <div className="travelCard">
      <div id="cardimagblock">
        <img
          src={props.imageUrl}
          id="imagcard"
          alt="cardimg"
        />
      </div>
      <div className="cardcontent">
        <div id="cardtop">
          <div id="location_name">
            <img src="../location.png" alt="location_icon" id="location_icon" />
            {props.location}
          </div>
          <div id="mapview">
           <a href={props.googleMapsUrl}>View on Google Map</a> 
          </div>
        </div>
        <br/>
        <div id="cardmain">
            <h1>{props.title}</h1>
            <br/>
            <h3>{props.startDate} - {props.endDate}</h3>
            <br/>
            <p>{props.description}</p>
        </div>
      </div>
       
    </div>
    
  );
}
// Photos from Unsplash
// (can use these URLs as your img src)

// Japan
// https://source.unsplash.com/WLxQvbMyfas

// Australia
// https://source.unsplash.com/JmuyB_LibRo

// Norway
// https://source.unsplash.com/3PeSjpLVtLg