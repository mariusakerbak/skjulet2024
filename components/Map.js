"use client"
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
//import MapController from "./MapController"
import dynamic from "next/dynamic"

const MapController = dynamic(() => import("@/components/MapController"),{ssr: false})

export default function StoryMap({selectedPlace, visitedPlaces, center, zoom}) {
    
    return (
        <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} style={{height: '100vh'}}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapController selectedPlace={selectedPlace} />
        
        {selectedPlace ? 
            <Marker position={selectedPlace.center} icon={selectedPlace.icon}>
                <Popup>
                    {selectedPlace.title}
                </Popup>
            </Marker> : <Marker position={center}>
                <Popup>
                    {title}
                </Popup>
            </Marker>}
        {visitedPlaces ? 
        visitedPlaces.map((p, i) => <Marker key={i} position={p.center} icon={p.icon}></Marker>) : null}

        
    </MapContainer>
    )
}