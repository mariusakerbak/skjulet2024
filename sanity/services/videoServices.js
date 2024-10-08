import { client } from "../lib/client"

export const fetchGPVideos = async () => {
    const videos = await client.fetch(`*[_type == "fpvideo" && visible == true]{title, ytid}`)
    return videos
}