import './index.scss';

import { BiLogoGmail } from "react-icons/bi";
import { AiOutlineYoutube } from "react-icons/ai";
import { PiFacebookLogoLight, PiInstagramLogoLight } from "react-icons/pi";

export default function Footer() {
    return <footer style={{ opacity: 0 }}>
        <div className='logos'>
            <a href="mailto:cheesyflyhome@gmail.com">
                <BiLogoGmail />
            </a>
            <a href="https://www.youtube.com/@CheesyFly" target='_blank'>
                <AiOutlineYoutube />
            </a>
        </div>
    </footer>;
}