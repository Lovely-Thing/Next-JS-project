import Link from "next/link"
import Image from 'next/image'

import pcLogo from '../public/img/logo_pc.png'
import spLogo from '../public/img/logo_sp.png'


export default function Logo() {
    return(
        <>
            <Link href="/" passHref>
                <div className="toplogo-img-container">
                    <Image
                        src={pcLogo}
                        alt="Logo" 
                    />
                </div>
            </Link>
        </>
    )
}