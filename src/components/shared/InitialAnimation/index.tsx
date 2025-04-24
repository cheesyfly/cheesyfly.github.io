import { useEffect, useState } from 'react';
import './index.scss';

export default function InitialAnimation() {
    const [removeMe, setRemoveMe] = useState(!!sessionStorage.getItem("has-seen-animation"));

    const showTheSite = () => {
       const header = document.getElementById('header')
       const main = document.querySelector('main')
       const footer = document.querySelector('footer')

       for (const el of [header, main, footer]) {
        el!.style.opacity = "1";
       }
    }
    
    useEffect(() => {
        if (sessionStorage.getItem("has-seen-animation")) {
            showTheSite()
            return
        }
        
        document.body.style.overflow = "hidden";
        
        setTimeout(() => {
            const img = document.querySelector("#splash-screen")
            sessionStorage.setItem("has-seen-animation", "true")

            img?.classList.add("blured");
            showTheSite()
            document.body.style.overflow = "auto";

            const splash = document.querySelector('#splash-screen');

            splash!.addEventListener('transitionend', () => {
                setRemoveMe(true);
            });
        }, 700);

        return () => {
            document.body.style.overflow = "auto";
        }
    }, [setRemoveMe]);
    
    
    if (removeMe) return <></>

    return <div id="splash-screen">
        <img src="/assets/images/splash-screen.png" />
    </div>;
}