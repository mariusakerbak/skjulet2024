"use client"

export default function PlaceButton({place = null}) {
    const print = () => {
        console.log(place.title)
    }
    return (<button onClick={print}>{place.title}</button>)
}