"use client"
import { useEffect, useMemo, useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import 'leaflet/dist/leaflet.css';
import { fetchAlbumLocations } from "@/sanity/services/locationServices";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";
import { Icon } from "leaflet";
import dynamic from "next/dynamic";
//import { Map } from "@/components/Map/MapContainer";

export default function sofaStory() {
    const startIcon = new Icon({
      iconUrl: '/images/markericons/halden.png',
      iconSize: [84, 75],
      iconAnchor: [22, 65],
      popupAnchor: [0,0]
    })
    const startPlace= {title: "Halden", center: [59.0688,11.4320], zoom: 6, icon: startIcon}
    const [selectedPlace, setSelectedPlace] = useState(startPlace)
    const [currentPlaceIndex, setCurrentPlaceIndex] = useState(-1)
    const [visitedPlaces, setVisitedPlaces] = useState([{id: -1, ...startPlace}])
    const [places, setPlaces] = useState(null)

    const getAlbumLocations = async (id) => {
      const allAlbumLocations = await fetchAlbumLocations(id)
      setPlaces(allAlbumLocations[0])
    }

    useEffect(() => {
      getAlbumLocations("37723119-fb7f-418f-8616-ca5a9e62af43")
    }, [])

    console.log(places)

    function definePlace(mod) {
      const newIndex = currentPlaceIndex + mod
      
      if(newIndex >= 0 && newIndex < places?.tracks.length) {
        const newPlace = places?.tracks[newIndex]
        const icon = new Icon({
          iconUrl: `/images/markericons/${newPlace.markerfile}`,
          iconSize: [84, 90],
          iconAnchor: [newPlace.markeroffsetx, newPlace.markeroffsety],
          popupAnchor: [0,0]
        })

        const placeObject = {title: newPlace.title, center: [newPlace.location.lat, newPlace.location.lng], city: newPlace.city, country: newPlace.country, zoom: newPlace.zoom, spotify: newPlace.spotify, lyrics: newPlace.lyrics, icon: icon}

        visitedPlaces?.filter(p => p.id === newIndex).length === 0 ? setVisitedPlaces([...visitedPlaces, {id: newIndex, ...placeObject}]) : null
        setSelectedPlace(placeObject)
        setCurrentPlaceIndex(newIndex)
        
      } else {
        setCurrentPlaceIndex(-1)
        setSelectedPlace(startPlace)
      }
    }
    
    /*const Map = useMemo(() => dynamic(
      () => import('@/components/Map'),
        {
          loading: () => <p>Kartet laster...</p>,
          ssr: false
        }
    ), [])*/
    const Map = () => dynamic(
      () => import('@/components/Map'),
        {
          loading: () => <p>Kartet laster...</p>,
          ssr: false
        }
    )

    const PortableTextComponents = {
      block: {
          h2: ({node, children}) => <h2 id={`h${node._key}`}>{children}</h2>,
          h3: ({node, children}) => <h3 id={`h${node._key}`}>{children}</h3>,
          h4: ({node, children}) => <h4 id={`h${node._key}`}>{children}</h4>,
      },
      types: {
          image: ({ value }) => {
              if(!value?.asset?._ref) {
                  return null
              }
              return(
                  <img 
                      alt={value.alt || ' '} 
                      loading="lazy" 
                      src={urlForImage(value).fit('max').auto('format')}
                  />
              )
          },
          fieldset: ({value}) => {
              if(!value.title) {
                  return null
              }

              return(
                  <fieldset>
                      <legend>{value.title}</legend>
                      <p>{value.content}</p>
                  </fieldset>
              )
          }
      }
  }

    return (
        <div id="couchMapStory" className="flex relative w-full h-screen bg-white">
            <div id="couchStoryContainer" className="flex flex-col w-full h-full relative md:w-1/3 lg:w-1/3 bg-blue bg-opacity-80 pb-[55px]">
              <h2 className="w-full flex justify-center items-center p-2 bg-charcoal text-white text-xl md:text-2xl">
                {
                  currentPlaceIndex > 0 ? 
                  <><span onClick={() => definePlace(-1)} className="flex flex-col opacity-80 text-2 md:text-sm cursor-pointer">
                    <span className="text-md">{places?.tracks[currentPlaceIndex - 1].city}</span> 
                    <span>{places?.tracks[currentPlaceIndex - 1].country}</span> 
                  </span>
                  <span className="text-sm p-3">&lt;</span></>
                  : null
                } 
                <span className="flex flex-col currentPlace font-semibold ">
                  <span className="text-center">{selectedPlace?.city ? selectedPlace.city : "Halden"}</span>
                  <span className="text-sm text-center">{selectedPlace?.country ? selectedPlace.country : "Norge"}</span>
                </span>
                {
                  currentPlaceIndex + 1 < places?.tracks.length ? 
                  <><span className="text-sm p-3">&gt;</span>
                    <span onClick={() => definePlace(1)} className="flex flex-col opacity-80 text-2 md:text-sm cursor-pointer">
                    <span className="text-md">{places?.tracks[currentPlaceIndex + 1].city}</span> 
                    <span>{places?.tracks[currentPlaceIndex + 1].country}</span> 
                  </span>
                  </>
                  : null
                }
              </h2>
              {
                selectedPlace?.lyrics && currentPlaceIndex >= 0 ? 
                  <div className="lyrics w-full p-3 overflow-y-scroll">{<PortableText value={selectedPlace.lyrics} components={PortableTextComponents} />}</div> : 
                  <div className="lyrics w-full p-3 overflow-y-scroll"><p>Reisen starter i hjembyen Halden, hvor Egil og Marius forlater Skjulet og legger ut på tur for å tjene litt penger for å kunne drive mer med musikk...</p>
                  <img src="/images/offwego.jpg" alt="" className="w-full rounded-md mt-3 mb-3 drop-shadow" />
                  <p>Med kurs for de karribiske øyer begynner problemene...</p><button className="bg-lion text-white p-3 cursor-pointer rounded animate-bounce mt-3 drop-shadow" onClick={() => definePlace(1)}>Start reisen gjennom sangene...</button></div>
              }
                <div id="couchStoryContainer_nav" className="absolute bottom-0 flex flex-nowrap w-full">
                    {currentPlaceIndex >= 0 ? <button id="previous" className="flex grow justify-center items-center bg-charcoal text-lion py-3" onClick={() => definePlace(-1)}><BiLeftArrowAlt /> Forrige</button> : null}
                    {currentPlaceIndex < places?.tracks.length - 1 ? <button id="next" className="flex grow justify-around items-center text-left bg-lion text-charcoal py-3" onClick={() => definePlace(1)}><span id="nextText text-left">Reis videre:<br /><strong>{places?.tracks[currentPlaceIndex + 1].title}</strong></span> <BiRightArrowAlt /></button> : null}
                </div>
                {selectedPlace?.spotify ? <div className="w-full p-3 mb-3"><iframe style={{borderRadius: "12px"}} src={selectedPlace.spotify} width="100%" height="152" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div> : null}
            </div>
            <div id="couchMapContainer" style={{ aspectRatio: 600/600, minHeight: '500px' }} className="w-full h-full md:w-2/3 lg:w-2/3 bg-red">
              <Map selectedPlace={selectedPlace} visitedPlaces={visitedPlaces} center={startPlace.center} zoom={startPlace.zoom} />
            </div>
        </div>
    )
}