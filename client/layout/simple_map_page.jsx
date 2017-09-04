import React from 'react';
import GoogleMap from 'google-map-react'
export default class SimpleMapPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div style={{height: '500px'}}>
           <GoogleMap
            center={{lat: 16.086039, lng:108.215180}}
            zoom={15}>
          </GoogleMap>
      </div>
    );
  }
}
