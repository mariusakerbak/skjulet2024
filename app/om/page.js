"use client"

import Heading from "@/components/Heading";
import Image from "next/image";
import Link from "next/link";

export default function About() {


    return (
    <article className="w-full max-w-[600px]">
        <Heading tag="h1" text="Historien bak Skjulet" />
        <p className="pt-5">«Skjulet» er en idé startet av Egil Myklestad og Marius Akerbæk, som siden 2016 har vært gode venner, kollegaer og hverandres trygge havn for å slenge ut og bearbeide diverse kreative idéer.</p>
        <p>Gjennom en reise med eget firma, T-skjorte-design og utvikling av web-systemer og media- og markedsføring for kunder gjenoppdaget begge musikk-gleden. Begge har både laget og spilt musikk tidligere, med en pause i en travel arbeids- og familiehverdag.</p>
        <p>Etter hvert ble ekstrajobb byttet med mer og mer musikklaging og skriving. Både Marius og Egil elsker å fortelle historier, og i 2024 ble det første musikalske reisealbumet ferdig! "</p>
        <p><Link href="/sangbok">Historier fra sofaen</Link> har plassert oss i mange verdenshistoriske begivenheter, pg en uskyldig ferietur endte med krig med narkobaroner, tilfeldig oppdage missiler på Cuba, en skogstur i Telemark under andre verdenskrig og en uheldig start av et folkeopprør i Romania, blant annet...</p>
        <p>Vi har laget en interaktiv opplevelse av dette reisebrevet, så du kan også bli med på reisen</p>
        <Link href="/historier/frasofaen" className="bg-blue text-white text-xl p-3 rounded-xl mt-3 mb-3">Hurra! Start reisen nå!</Link>
        <p className="pt-5">Etter vi slapp singlene "Bygning i Berlin", "Krise på Cuba" og "Bucuresti Blues", fikk vi en hyggelig forespørsel. Tor-David, Marius' skolekompis fra tidligere, hadde hørt musikken, likte konseptet, og sa at dersom vi skulle ha lyst på en bassist, var han tilgengelig. Lang historie kort; Tor har sørget for solid rytmisk forankring av resten av Historier fra sofaen, og stiller med Skjulets beste mustasj!</p>
        <p>Og for å komplettere rytme, fikk vi med vår felles kamerat Morgan. Egil har spilt en del med Morgan tidligere, som også spilte trommer på en av Marius julesanger på 2016-varianten av det lokale initiativet "Jul i Halden".</p>
        <p>Som et helt band, med en hel plate, setter vi ut på en videre reise med sanger vi er stolt av i 2024!</p>
    </article>)
}