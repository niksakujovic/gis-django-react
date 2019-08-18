import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"


class Map extends React.Component {
  state = {
    isInfoWindowOpen: false,
  }

  onClickMarker = () => {
    this.setState({
      isInfoWindowOpen: true,
    });
  }

  render() {
    const { isInfoWindowOpen } = this.state;
    const { office } = this.props;
    const [lat, lng] = office.coords;

    return (
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat, lng }}
      >
        <Marker position={{ lat, lng }} onClick={this.onClickMarker}>
          {isInfoWindowOpen && (
            <InfoWindow>
              <div>
                <h4>SpotOn {office.name}</h4>
                <p>{office.address}</p>
              </div>
            </InfoWindow>
          )}
        </Marker>
      </GoogleMap>
    );
  }
}


export default function (props) {
  const WrappedMap = withScriptjs(withGoogleMap(Map));

  return (
    <WrappedMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBrfzT7z5DBYBYOTVeblzvribCyoHQNwbs&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      {...props}
    />
  );
}
