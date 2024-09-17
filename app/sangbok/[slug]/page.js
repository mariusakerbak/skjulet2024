export default async function Song({params}) {

    const song = await fetch(`https://zp7mbokg.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "song" && slug.current == $slug]&$slug=${params.slug.current}`)
    console.log(song)
    
    return <h1>{params.slug}</h1>
}