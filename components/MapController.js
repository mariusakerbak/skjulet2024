import { useEffect } from "react";
import { useMap } from "react-leaflet";

export default function MapController({selectedPlace}) {
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