import Link from "next/link"
import Image from 'next/image'
import footerLogo from '../public/img/footerLogo_pc.png'
import footerSPLogo from '../public/img/footerLogo_sp.png'

export default function Footer() {
    return(
        <footer>
            <div className="container">
                <div>
                    <Link href="/" passHref> 
                        <div className="footer-logo-container">
                            <Image
                                src={footerLogo}
                                alt="Logo" 
                            /> 
                        </div>
                    </Link>
                    <p>プライバシーポリシー</p>
                </div>
            </div>
        </footer>
    )
}