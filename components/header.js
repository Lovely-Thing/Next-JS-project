import Link from "next/link"
import Logo from "./logo"
import CustomButton01 from "./customButton01"
import LineSpace from "./lineSpace"

export default function Header() {
    return(
        <>
            <div className="container-fluid">
                <div className="topbar-content flex-csb">
                    <Logo />
                    <Link href="/" passHref>
                        <div>
                            <CustomButton01 name="お店に導入する" className="customBtn01"/>
                        </div>
                    </Link>                                    
                </div>
            </div>
            <LineSpace className="brownSpace" />
        </>
    )
}