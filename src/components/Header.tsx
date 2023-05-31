import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { SITE_AUTHOR } from '../consts';
import '../styles/header.css';

export default function Header() {

	const author = SITE_AUTHOR.toUpperCase();

	const [isHomePage, setIsHomePage] = useState<null | boolean>(null);
	const [navStripStyle, setNavStripStyle] = useState({left: '0', opacity: '0'});

	const logoStyle = 'logo-container relative pl-[44px] nav-text-hover font-bold flex items-center !m-0';
    const logoContent = <><img className="logo" src="/logo.png" alt="logo" /><img className="logo" src="/logo-hover.png" alt="logo" />{author}</>;

	const menuLinks = [["portfolio", "Portfolio"], ["about", "About me"], ["contacts", "Contacts"]];

	const handleMenuSetActive = (toIndex: number) => {
        setNavStripStyle({left: `calc((100% * ${toIndex}) + (16px * ${toIndex}))`, opacity: '1'});
    };

    const handleMenuSetInactive = (index: number) => {
        if(index == 0) setNavStripStyle({left: '0', opacity: '0'});
    }

	useEffect(() => {
        if(window.location.pathname == '/') 
            setIsHomePage(true);
        else
            setIsHomePage(false);
    }, [window.location.pathname]);

	return (
		<header>
			<nav className="navbar">
				<div className="navbar-inner wrapper">

					{/*** LOGO ***/}
					{isHomePage ?
						<Link
							className={logoStyle}
							to={'home'}
							spy={true}
							smooth={true}
							offset={-70}
							duration={300}
							hashSpy={true}
							href={`/#home`}
						>
							{logoContent}
						</Link>
					:
						<a href='/#home' className={logoStyle}>
							{logoContent}
						</a>
					}

					{/*** MENU ***/}
					<ul id="nav-desktop-menu" className="grid grid-flow-col auto-cols-fr text-center gap-x-4 !m-0">
						{menuLinks.map((link, index) =>
							<li className="relative" key={link[0]}>
								{index == 0 ? <div id="nav-strip" style={navStripStyle}></div> : ''}
								{isHomePage ?
									<Link
										className="nav-text-hover"
										activeClass="nav-active"
										onSetActive={() => handleMenuSetActive(index)}
										onSetInactive={() => handleMenuSetInactive(index)}
										to={link[0]}
										spy={true}
										smooth={true}
										offset={0}
										duration={300}
										hashSpy={true}
										href={`/#${link[0]}`}
									>
										{link[1]}
									</Link>
								: <a href={`/#${link[0]}`} className="nav-text-hover">{link[1]}</a>}
							</li>
						)}
					</ul>
				</div>
			</nav>
		</header>
	)
}