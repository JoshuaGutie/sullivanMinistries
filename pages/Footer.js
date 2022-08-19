import Image from "next/dist/client/image";
import ministries from "../public/images/ministries.png"

function Footer() {
    return ( 
        <div className="footerContainer">
            <div className="footerLogo"><Image src={ministries} alt="logo/></div>
        </div>
     );
}

export default Footer;