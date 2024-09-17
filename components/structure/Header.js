import Image from "next/image";
import Link from "next/link";
import { BiLogoApple, BiLogoFacebookCircle, BiLogoInstagram, BiLogoSpotify, BiLogoYoutube } from "react-icons/bi";

/* header classes: border-b-[15px] border-solid border-white mb-4 */

export default function Header() {
    return (<header className="bg-black flex flex-col md:flex-row justify-between items-center p-3 sticky top-0">
          <Link href={`/`} class><Image src="/images/skjulet_logo_hvit.svg" width={200} height={75} alt="Skjulet" /></Link>
          <nav className="flex flex-row justify-between items-center">
            <Link href={`https://www.youtube.com/channel/UC7D-jFfJqu3LHvReXgQ8o-g`}><BiLogoYoutube className="hover:text-lion rounded hover:bg-umber duration-1000 transition ease-in-out" /></Link>
            <Link href={`https://open.spotify.com/artist/44im0D1VFjAteBS2F25MlG`}><BiLogoSpotify className="hover:text-lion rounded hover:bg-umber duration-1000 transition ease-in-out" /></Link>
            <Link href={`https://music.apple.com/us/artist/skjulet/1541021743`}><BiLogoApple className="hover:text-lion rounded hover:bg-umber duration-1000 transition ease-in-out" /></Link>
            <Link href={`https://www.instagram.com/guttaiskjulet/`}><BiLogoInstagram className="hover:text-lion rounded hover:bg-umber duration-1000 transition ease-in-out"/></Link>
            <Link href={`https://www.facebook.com/guttaiskjulet`}><BiLogoFacebookCircle className="hover:text-lion rounded hover:bg-umber duration-1000 transition ease-in-out" /></Link>
          </nav>
          <nav className="flex flex-row justify-between items-center">
            <Link href={`/sangbok`} className="rounded hover:bg-umber duration-1000 transition ease-in-out p-2">Sangene</Link>
            <Link href={`/om`} className="rounded hover:bg-umber duration-1000 transition ease-in-out p-2">Om Skjulet</Link>
          </nav>
        </header>)
}