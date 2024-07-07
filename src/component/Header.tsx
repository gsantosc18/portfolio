import { useContext, useEffect, useState } from "react";
import { ActiveHeader } from "./Contexts";

function Header() {
    const [toggleMenu, setToggleMenu] = useState("mobile-menu-hide");

    const changeMobileVisibility = () => {
        const mobileVisibilityClass = "mobile-menu-hide"
        setToggleMenu(toggleMenu == mobileVisibilityClass?"":mobileVisibilityClass)
    }

    const { activeHeader, setActiveHeader } = useContext(ActiveHeader);

    const setHeader = (header: string) => {
        setActiveHeader(header)
        changeMobileVisibility()
    }

    const [stikedClass, setStickedClass] = useState("");

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setStickedClass(window.scrollY > 20 ? "sticked":"");
        });
    }, []);

    return (
        <div>
            <header id="site_header" className={["header", toggleMenu, stikedClass].join(" ")}>
                <div className="header-content">
                    <div className="site-title-block mobile-hidden">
                        <div className="site-title">
                            Gedalias <span>Caldas</span>
                        </div>
                    </div>

                    <div className="site-nav">
                        <ul id="nav" className="site-main-menu">
                            <li className={activeHeader == "#home" ? "active":""}>
                                <a href="#home" className="pt-trigger" onClick={() => setHeader("#home")}>Inicio</a>
                            </li>
                            <li className={activeHeader == "#resume" ? "active":""} onClick={() => setHeader("#resume")}>
                                <a href="#resume" className="pt-trigger">Currículo</a>
                            </li>
                            <li className={activeHeader == "#profile" ? "active":""} onClick={() => setHeader("#profile")}>
                                <a href="#profile" className="pt-trigger">Portifólio</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <div className="mobile-header mobile-visible">
                <div className="mobile-logo-container">
                    <div className="mobile-site-title">Gedalias Caldas</div>
                </div>

                <a className="menu-toggle mobile-visible" onClick={changeMobileVisibility}>
                    <i className="fa fa-bars"></i>
                </a>
            </div>
        </div>
    );
}

export default Header;