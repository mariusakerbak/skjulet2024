import Heading from "@/components/Heading";
import Inlinelink from "@/components/Inlinelink";
import Footer from "@/components/structure/Footer";
import Header from "@/components/structure/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Header />
        <main>
          <section id="hero" className="flex justify-center">
            <article className="flex flex-col max-w-[400] text-center mt-[100px] md:mt-0">
              <Image src="/images/title.png" width={500} height={200} />
              <p>slippes 20. september på alle platformer der du kan høre musikk!</p>
             
            </article>
          </section>
          <section id="frontpage-musicvideos" className="flex flex-wrap gap-8 py-8 px-4 bg-blue">
            <Heading tag="h2" text="Siste fra Skjulet på YouTube" addClass="w-full block justify-self-stretch text-center" />
            <article className="grow border-white border-4">
            <iframe className="youtube-video" src="https://www.youtube.com/embed/XfRlHVhyZtE?si=RJnBNznu1XlFhwTL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </article>
            <article className="grow rounded border-white border-4">
              <iframe className="youtube-video" src="https://www.youtube.com/embed/ng6dAwBpuWk?si=oEfL7kbZgSJ-f34I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </article>
            <article className="grow rounded border-white border-4">
              <iframe className="youtube-video" src="https://www.youtube.com/embed/2wwHOfkMcFk?si=MmtQKVqKsgKboDKI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </article>
          </section>
        </main>
      <Footer />
    </>
  );
}
