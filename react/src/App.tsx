import React, { useState } from 'react'

import Header from './component/Header'
import Content from './component/Content';
import { ActiveHeader } from "./component/Contexts";

function App () {
    const [activeHeader, setActiveHeader] = useState(window.location.hash || "#home")
    return (
        <div id="page" className="page">
            <ActiveHeader.Provider value={{ activeHeader, setActiveHeader }}>
                <Header/>
                <Content/>
            </ActiveHeader.Provider>
        </div>
    )
}

export default App
