import { useEffect, useState } from 'react';
import './index.scss';

export default function InitialAnimation() {
    const [removeMe, setRemoveMe] = useState(!!sessionStorage.getItem("has-seen-animation"));
    
    useEffect(() => {
        if (sessionStorage.getItem("has-seen-animation")) return
        
        document.body.style.overflow = "hidden";
        
        setTimeout(() => {
            const img = document.querySelector("#splash-screen")
            sessionStorage.setItem("has-seen-animation", "true")

            img?.classList.add("blured");
            setTimeout(() => { 
                setRemoveMe(true)
                document.body.style.overflow = "auto";
            }, 1000);
        }, 1000);

        return () => {
            document.body.style.overflow = "auto";
        }
    }, [setRemoveMe]);
    
    
    if (removeMe) return <></>

    return <div id="splash-screen">
        <img src="/assets/images/splash-screen.png" />
    </div>;
}