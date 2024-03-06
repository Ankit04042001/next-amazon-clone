import Image from "next/image";
import logoIcon from "../images/logo.png";

function Footer() {
  return (
    <div className="w-full h-20 bg-amazon_light text-gray-300 flex items-center justify-center gap-4">
        <Image className="w-24" src={logoIcon} alt='logo' />
        <p>
            All right reserved
        </p>
    </div>
  )
}

export default Footer