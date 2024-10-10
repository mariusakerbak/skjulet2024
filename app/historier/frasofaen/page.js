import { client } from "@/sanity/lib/client";
import dynamic from "next/dynamic";
import { useMemo } from "react";

export const getSongs = async () => {
    return await client.fetch(`*[_type == "album" && _id == "37723119-fb7f-418f-8616-ca5a9e62af43"][0] {title, "songlist": tracks[]->}`)
}

const sofaStory = async () => {
    const songs = await getSongs()
    console.log(songs)

    const Map = dynamic(
        () => import('@/components/map/Map'),
        {
            loading: () => <p>A map is loading</p>,
            ssr: false
        }
    )

    return (
        <main>
        <div style={{width: "400px;", color: "#ffffff", zIndex: 99, position: "absolute", left: "10px", top: "10px", backgroundColor: "rgba(0,0,0,.5)"}}>
        {songs?.songlist?.map((s, i) => <p key={i}>{s.title}</p>)}
        </div>
        <div style={{width: "100vw", height: "100vh", backgroundColor: "#ffffff", zIndex: "9", position: "fixed", top: "0", left: "0"}}>
            <Map position={[songs?.songlist[0].location.lat, songs?.songlist[0].location.lng]} zoom={songs?.songlist[0].zoom} />
        </div>
        </main>
    )
}

export default sofaStory