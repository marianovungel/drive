import React from 'react'
import './Map.css'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

export default function Map() {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAvPZ9XjoNa46ug8lbSQ6aYUg7FV6f4mK4"
      })

      const position = {
        lat:-4.223145843952612, 
        lng:-38.72466523980778
      }

  return (
    <div className='Map'>
      {
        isLoaded ? (
            <GoogleMap
              mapContainerStyle={{width:"100%", height:"100%"}}
              center={position}
              zoom={15}
            >
                <Marker position={position} />
            </GoogleMap>
        ) : <></>
      }
    </div>
  )
}
