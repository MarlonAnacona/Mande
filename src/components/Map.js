import { render } from '@testing-library/react';
import React, { Component } from 'react';
import GoogleMaps from "simple-react-google-maps";

export default class Map extends Component{

  render() {
    return (
      <div className='container'>
        <GoogleMaps
        apiKey= {"AIzaSyCRdk4DSqMHIqHb6QbxBkbj8PHVAi3CaDM"}
        style = {{height: "500px", width: "370px"}}
        zoom={10}
        center={{
          lat: 3.4159336, 
          lng: -76.5320496,
        }}
        />
      </div>
    )
  }
  
}
    
