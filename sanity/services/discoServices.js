import { client } from "../lib/client"

export const fetchDisco = async () => {
    const disco = await client.fetch(`*[_type == "album"]{title, "link": slug.current, "cover": coverimage.asset->url , publishyear, _id, "songs": tracks[]->} | order(publishyear asc)`)
    return disco
}

export const fetchSong = async (slug) => {
    const song = await client.fetch(`*[_type == "song" && slug.current == $slug]{...}`,{slug})
    return song
}