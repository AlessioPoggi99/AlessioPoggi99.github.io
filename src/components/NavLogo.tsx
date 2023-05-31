import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { SITE_AUTHOR } from '../consts';
const author = SITE_AUTHOR.toUpperCase()

export default function NavMenu() {

    const [isHomePage, setIsHomePage] = useState<null | boolean>(null);


    useEffect(() => {
        if(window.location.pathname == '/') 
            setIsHomePage(true);
        else
            setIsHomePage(false);
    }, [window.location.pathname]);

    const style = 'logo-container relative pl-[44px] nav-text-hover font-bold flex items-center'
    const content = <><img className="logo" src="/logo.png" alt="logo" /><img className="logo" src="/logo-hover.png" alt="logo" />{author}</>

    return (
        isHomePage ?
            <Link
                className={style}
                to={'home'}
                spy={true}
                smooth={true}
                offset={-70}
                duration={300}
            >
                {content}
            </Link>
        :
            <a href='/#home' className={style}>
                {content}
            </a>
    );
}