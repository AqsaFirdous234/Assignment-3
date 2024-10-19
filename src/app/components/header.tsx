import Logo from "../public/logo.png"
import Image from "next/image"
import Link from "next/link"
export default function Header(){
    return(
        <div className="header">
            <div className="navbar">
              
                <ul className="header-button">
                   <Link href={"/"}><li>Home</li></Link>
                   <Link href={"./about"}> <li>About</li> </Link>
                    <Link href={"./contact"}><li>Contact</li></Link>
                    </ul>
                <div className="logo">
               <Image src={Logo} alt="Logo" height={90} />
               </div>
            </div>
            <hr className="line" />
        </div>
        
    )
}