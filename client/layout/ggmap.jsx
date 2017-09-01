import React, {PropTypes} from "react"

import GoogleMap from "react-google-map"
import GoogleMapLoader from "react-google-maps-loader"

const MY_API_KEY = "AIzaSyDdhgbPxMYLYBCVsmNYZGBrc_DXfoBZK0I" // fake

const Map = ({googleMaps}) => (
  // GoogleMap component has a 100% height style.
  // You have to set the DOM parent height.
  // So you can perfectly handle responsive with differents heights.

 class App extends React.Component {
    constructor(props) {
     super(props);
    }
    render(){
        return (
  <div>
    <GoogleMap
      googleMaps={googleMaps}
      coordinates={[
        {
          title: "Toulouse",
          icon: iconMarker,
          position: {
            lat: 43.604363,
            lng: 1.443363,
          },
          },
        }
      ]}
      center={{lat: 43.604363, lng: 1.443363}}
      zoom={8}
      onLoaded={(googleMaps, map) => {
        map.setMapTypeId(googleMaps.MapTypeId.SATELLITE)
      }}
    />
  </div>
  )}
}

Map.propTypes = {
  googleMaps: PropTypes.object.isRequired,
}

export default GoogleMapLoader(Map, {
  libraries: ["places"],
  key: AIzaSyDdhgbPxMYLYBCVsmNYZGBrc_DXfoBZK0I,
})
