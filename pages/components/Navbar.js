
import Styles from '../../styles/Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/logo.png'
import { useSession, signOut } from "next-auth/react";


function Navbar() {
    const { data: session } = useSession();


  return (
    <div className={Styles.Navbar}>
            <div className={Styles.Logo}>
                <Image alt='Logo' src={Logo} width={50} height={40} />
            </div>
            
            {/* <img src="./Playstation_Img/logo.png" class="logo"> */}
            <div className={Styles.Nav}>
            <nav>
                <ul id="menuList">
                    <li>
                        <Link href="#"><a>Game Controller</a></Link>
                    </li>
                    <li>
                        <Link href="#"><a>VR Accessories</a></Link>
                    </li>
                    <li>
                        <Link href="#"><a>Media Remotes</a></Link>
                    </li>
                    <li>
                        <Link href="#"><a>More</a></Link>
                    </li>
                </ul>
                <div className="btn" style={{ color: "white" }}>
                
                    <button className="sIn" onClick={()=> signOut()}>
                    <a>LogOut</a>
                    </button>
                </div>
            </nav>
            </div>
            
    </div>
  )
}

export default Navbar
