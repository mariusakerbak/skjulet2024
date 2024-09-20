"use client"

import Heading from "@/components/Heading";
import Link from "next/link";

export default function About() {


    return (
    <article className="w-full max-w-[600px]">
        <Heading tag="h1" text="Pre-Releasekonsert" />
        <p className="pt-5">Den 20. september holder vi en liten release-konsert for spesielt interesserte!</p>
        <p>Konserten starter kl. 18:00. Den er barnevennlig, men fra ca. kl. 20:00 blir det mingling og hygge for "de voksne".</p>
        <p>Konserten holdes i Låven på Herrebøkasa. Følg Fv220 til Bøklevene. <Link href="https://www.google.no/maps/place/B%C3%B8klevene+320,+1766+Halden/@59.0712216,11.4691675,17z/data=!3m1!4b1!4m6!3m5!1s0x46446c63086cec45:0x61c2617e3bafd921!8m2!3d59.0712216!4d11.4717424!16s%2Fg%2F11c4s2sxl3?entry=ttu&g_ep=EgoyMDI0MDkxNi4wIKXMDSoASAFQAw%3D%3D">Se kart og veibeskrivelse her</Link></p>
        <p>Vil du lære deg sangene før konserten? <Link href="/sangbok">I sangboka</Link> ligger alle låtene med tekster!</p>
    </article>)
}