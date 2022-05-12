import Image from 'next/image'
import Link from 'next/link'

const Logo = ({ color = "black", size = 1 }) => {
    return <Link href='/'>
    <a>
    <Image 
        src={`/images/spotify-logo-${color}.svg`}
        alt="Spotify Logo"
        width={63 * size}
        height={20 * size}
        //layout='responsive'
    />
    </a>
    </Link>
}
export default Logo;