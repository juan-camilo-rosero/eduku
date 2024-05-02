import { createContext, useEffect, useState} from "react"

export const SectionContext = createContext()

export function SectionContextProvider(props) {
    const [heroSection, setHeroSection] = useState(true)
    const [book, setBook] = useState(false)

    return (
        <SectionContext.Provider value={{
            heroSection,
            setHeroSection,
            book,
            setBook
        }}>
            {props.children}
        </SectionContext.Provider>
    )
}