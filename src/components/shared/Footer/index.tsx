import './index.scss';

import { BiLogoGmail } from "react-icons/bi";
import { AiOutlineYoutube } from "react-icons/ai";
import { PiFacebookLogoLight, PiInstagramLogoLight } from "react-icons/pi";

export default function Footer() {
    return <footer>
        <div className='logos'>
            <a href="mailto:mixtega.angel.ivan@gmail.com">
                <BiLogoGmail />
            </a>
            <a href="https://www.youtube.com/@CheesyFly" target='_blank'>
                <AiOutlineYoutube />
            </a>
        </div>
    </footer>;
}