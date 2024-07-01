import React, { useContext } from "react";
import Home from "./Home";
import Resume from "./Resume";
import { ActiveHeader } from "./Contexts";

export default function Content() {
    
    const { activeHeader } = useContext(ActiveHeader);

    return (
        <div id="main" className="site-main">
            <div className="pt-wrapper">
                <div className="subpages" style={{overflow: "visible"}}>
                    <Home active={activeHeader == "#home"}/>
                    <Resume active={activeHeader == "#resume"}/>
                </div>
            </div>
        </div>
    );
}