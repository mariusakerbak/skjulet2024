import Heading from "@/components/Heading";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

export const getSong = async (slug) => {
    return await client.fetch(`*[_type == "song" && slug.current == $slug][0] {
        title, markerfile, lyrics, spotify, 
        "album": *[_type == "album" && ^._id in tracks[]._ref][0]{title, "songs": tracks[]->}
    }`, {slug})
}

const SongDetails = async ({ params}) => {
    const song = await getSong(params.slug);
    console.log(song)

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
    
    return (<article className="max-w-[1000px] text-left">
        <Link className="bg-slate-200 text-slate-600 p-2 rounded-md" href="/sangbok">&laquo; Tilbake til sangboka</Link>
        <header className="flex gap-2 items-center mt-3 border-b-2 border-b-slate-100">
            <Image src={`/images/markericons/${song.markerfile}`} width={60} height={50} />
            <Heading tag="h1" text={song.title} />
        </header>
        <div className="flex flex-col md:flex-row gap-2">
            <div className="min-w-[400px]">
                <PortableText value={song.lyrics} components={PortableTextComponents} />
            </div>
            <div className="w-full bg-slate-100 p-2 max-w-[400px]">
            {song?.spotify ? <div className="w-full p-3 mb-3"><iframe style={{borderRadius: "12px"}} src={song.spotify} width="100%" height="152" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div> : null}
            <section>
                <h2 className="text-xl">Flere sanger fra {song.album.title}</h2>
                <ul className="mt-2 mb-4">
                    {song.album.songs?.map((s, index) => <li className="mb-1 h-8"><Link className="flex flex-row gap-2 items-center h-8 hover:bg-lion rounded-l-full rounded-r-md hover:text-white transition-all" href={`/sangbok/${s.slug.current}`}><span className="rounded-full bg-blue text-white w-6 h-6 text-sm flex justify-center items-center">{index + 1} </span>{s.title}</Link></li>)}
                </ul>
                
            </section>
            </div>
            
        </div>
        
        
    </article>)
}

export default SongDetails;