import { createContext } from "react";

export const ActiveHeader = createContext({
    activeHeader: "",
    setActiveHeader: (header: string) => {}
});