import { useContext, useEffect } from "react";
import Home from "./Home";
import Resume from "./Resume";
import { ActiveHeader } from "./Contexts";
import { ProfilePage } from "./ProfilePage";

const allowHeader = ["#home", "#resume","#profile"]

export default function Content() {
    const { activeHeader, setActiveHeader } = useContext(ActiveHeader);

    useEffect(() => {
        if (!allowHeader.includes(activeHeader)) {
            setActiveHeader(allowHeader[0])
        }
    })

    return (
        <div id="main" className="site-main">
            <div className="pt-wrapper">
                <div className="subpages" style={{overflow: "visible"}}>
                    <Home active={activeHeader === "#home"}/>
                    <Resume active={activeHeader === "#resume"}/>
                    <ProfilePage active={activeHeader === "#profile"}/>
                </div>
            </div>
        </div>
    );
}