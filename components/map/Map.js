'use client'

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"

import { useEffect } from "react";
import { useMap } from "react-leaflet";

export function MapController({selectedPlace = false}) {
    const map = useMap()
    const flyDuration = 3.5

    const flyTo = (location, zoom) => {
        map.flyTo(location, zoom, {
            animate: true,
            duration: flyDuration
        })
    }

    const flyToCenter = () => {
        map.flyTo([59.0688,11.4320], 6, {
            animate: true,
            duration: flyDuration
        })
    }

    useEffect(() => {
        if(selectedPlace) {
            flyTo(selectedPlace.center, selectedPlace.zoom)
        } else {
            flyToCenter()
        }
    }, [selectedPlace])
}

const Map = ({position, zoom}) => {

  return <MapContainer center={position} zoom={zoom} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <MapController selectedPlace={false} />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
}

export default Map