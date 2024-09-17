export default function Heading({tag = "h2", text, addClass}) {
    if(tag === "h1" || !tag) {
        return (<h1 className={`font-semibold text-3xl md:text-5xl ${addClass}`}>{text}</h1>)
    }
    if(tag === "h2" || !tag) {
        return (<h2 className={`font-semibold text-2xl md:text-4xl ${addClass}`}>{text}</h2>)
    }
    if(tag === "h3") {
        return (<h3 className="font-semibold text-xl md:text-3xl">{text}</h3>)
    }
    if(tag === "h4") {
        return (<h3 className="font-semibold text-lg md:text-xl">{text}</h3>)
    }
}