"use client"

export default function PlaceButton({place = null, currentIndex}) {
    const print = () => {
        console.log(currentIndex)   
    }
    return (<button onClick={print}>{place.title}</button>)
}