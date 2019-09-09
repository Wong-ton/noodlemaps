import React, { Component } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';

function BaseMap(props) {
        return (
            <GoogleMap defaultZoom={9} defaultCenter={{ lat: 34.052235, lng: -118.243683 }}>
              
              {
                props.shops.map((shop, i) => {
                  return (
                    <Marker 
                      key={i} 
                      position={{ lat: shop.coordinates.latitude, 
                                  lng: shop.coordinates.longitude 
                                }}
                      label={`${i}`}
                    />
                  )
                })
              }
        </GoogleMap>
        )
}
    
const WrappedMap = withScriptjs(withGoogleMap(BaseMap));

const apiKey = process.env.REACT_APP_MAP_API_KEY;

class Map extends Component {

    render() {
      return (
        <div id="map">
          <WrappedMap 
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${apiKey}`} 
            loadingElement={<div style={{ height: "100%" }}/>} 
            containerElement={<div style={{ height: "100%" }}/>} 
            mapElement={<div style={{ height: "100%" }}/>} 
            shops={this.props.shops}
          />
        </div>
      )
    }
}

export default Map;