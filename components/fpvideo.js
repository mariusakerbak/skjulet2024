export default function FPVideo({title, id}) {
    return (<article className="grow md-full md:w-[30%] rounded border-white border-4">
        <iframe className="youtube-video" src={`https://www.youtube.com/embed/${id}`} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </article>)
}