import { useState, useEffect } from "react";
import { Link, scroll } from "react-scroll";

export default function NavMenu() {

    const [isHomePage, setIsHomePage] = useState<boolean | null>(null)
    const [navStripStyle, setNavStripStyle] = useState({left: '0', opacity: '0'})

    const navbar = document.querySelector('nav.navbar') as HTMLElement;

    const handleSetActive = (toIndex: number) => {
        setNavStripStyle({left: `calc((100% * ${toIndex}) + (16px * ${toIndex}))`, opacity: '1'});
    };

    const handleSetInactive = (index: number) => {
        if(index == 0) setNavStripStyle({left: '0', opacity: '0'});
    }

    const links = [["portfolio", "Portfolio"], ["about", "About me"], ["contacts", "Contacts"]];

    useEffect(() => {
        if(window.location.pathname == '/') 
            setIsHomePage(true);
        else
            setIsHomePage(false);
    }, [window.location.pathname]);

    return (
        <ul id="nav-desktop-menu" className="grid grid-flow-col auto-cols-fr text-center gap-x-4">
            {links.map((link, index) =>
                <li className="relative" key={link[0]}>
                    {index == 0 ? <div id="nav-strip" style={navStripStyle}></div> : ''}
                    {isHomePage ?
                        <Link
                            className="nav-text-hover"
                            activeClass="nav-active"
                            onSetActive={() => handleSetActive(index)}
                            onSetInactive={() => handleSetInactive(index)}
                            to={link[0]}
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={300}
                        >
                            {link[1]}
                        </Link>
                    : <a href={`/#${link[0]}`} className="nav-text-hover">{link[1]}</a>}
                </li>
            )}
        </ul>
    );
}