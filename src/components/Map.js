import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker  } from 'google-maps-react';
import CurrentLocation from "./CurrentLocation.js";



export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };
  
  // locationCallback = (currentLocation) => {
  //   return currentLocation;
  // };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
  
    return (
      <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
        cbFromParent={this.props.cbFromParent}
        // {(t) => {
        //   this.setState({
        //     location: this.state.currentLocation
        //   });
        // }}
      >        
        <Marker onClick={this.onMarkerClick} name={'current location'} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </CurrentLocation>
      
    );
    
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDg9Ng1ytm4frd8d6cp9O7IOBDvYEStDQw'
})(MapContainer);

