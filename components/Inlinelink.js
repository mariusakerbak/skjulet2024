import Link from "next/link";

export default function Inlinelink({link, linktext, inverse=false}) {
    if(inverse) {
        return <Link href={link} className="underline text-lion hover:bg-charcoal hover:text-lion transition ease-in-out delay-100 duration-500 p-1 inline rounded">{linktext}</Link>
    } else {
        return <Link href={link} className="underline text-charcoal hover:bg-charcoal hover:text-lion transition ease-in-out delay-100 duration-500 p-1 inline rounded">{linktext}</Link>
    }
    
}