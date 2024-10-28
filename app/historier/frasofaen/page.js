"use client"
import PlaceButton from "@/components/map/PlaceButton";
import { client } from "@/sanity/lib/client";


import dynamic from "next/dynamic";

export const getSongs = async () => {
    return await client.fetch(`*[_type == "album" && _id == "37723119-fb7f-418f-8616-ca5a9e62af43"][0] {title, "songlist": tracks[]->}`)
}

const sofaStory = async () => {

    const songs = await getSongs()
    console.log(songs?.songlist)

    const Map = dynamic(
        () => import('@/components/map/Map'),
        {
            loading: () => <p>A map is loading</p>,
            ssr: false
        }
    )

    return (
        <main>
        <article className="w-[400px] h-full z-50 bg-black bg-opacity-60 text-white absolute left-0 top-0">
        {songs?.songlist?.map((s, i) => <PlaceButton key={i} place={s} currentIndex={i} />)}
        </article>
        <div style={{width: "100vw", height: "100vh", backgroundColor: "#ffffff", zIndex: "9", position: "fixed", top: "0", left: "0"}}>
            <Map position={[songs?.songlist[0].location.lat, songs?.songlist[0].location.lng]} zoom={songs?.songlist[0].zoom} />
        </div>
        </main>
    )
}

export default sofaStory