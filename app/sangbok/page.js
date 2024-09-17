"use client"

import Heading from "@/components/Heading";
import { fetchDisco } from "@/sanity/services/discoServices";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Songbook() {
    const [disco, setDisco] = useState(null)

    const getDisco = async () => {
        const data = await fetchDisco()
        setDisco(data)
    }

    useEffect(() => {
        getDisco()
    }, [])

    console.log(disco)

    

    return (
    <section className="w-full max-w-[1000px]">
        <Heading text={"Sangbok"} tag="h1" />
        {disco?.map(album => <article className="bg-slate-200 p-5 mt-3 rounded-md flex gap-4 flex-col md:flex-row">
            <Image className="rounded-md" src={album.cover} width={400} height={400} />
            <div>
                <h2 className="text-4xl mb-3"><span className="text-sm w-full block">{album.publishyear}</span>{album.title}</h2>
                <ul>
                    {album.songs?.map((song, index) => <li className="mb-1 h-8"><Link className="flex flex-row gap-2 items-center h-8 hover:bg-lion rounded-l-full rounded-r-md hover:text-white transition-all" href={`/sangbok/${song.slug.current}`}><span className="rounded-full bg-blue text-white w-8 h-8 flex justify-center items-center">{index + 1} </span>{song.title}</Link></li>)}
                </ul>
            </div>
        </article>)}
    </section>)
}