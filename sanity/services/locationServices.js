import { client } from "../lib/client"

export const fetchAllLocations = async () => {
    const locations = client.fetch(`*[_type == "song"]`)
    return locations
}

export const fetchAlbumLocations = async (id) => {
    const albumLocations = client.fetch(`*[_type == "album" && _id == $id]{_id, tracks[]->{title,location, city, country,zoom, lyrics, spotify, markerfile, markeroffsetx, markeroffsety}}`,{id})
    return albumLocations
}