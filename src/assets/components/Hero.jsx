import React, {useState, useEffect, useRef} from "react";
import HeroSlider from "./HeroSlider";
import mainDataJSON from "../mainData.json"

const heroDOM = mainDataJSON.hero.data

export default function Hero({screenSize}) {

    const [heroState, setHeroState] = React.useState(heroDOM)
    const [activeHero, setActiveHero] = React.useState({
        id: 1,
        duration: 0,
        isPaused: false
    })

    const hero = heroState.filter(hero =>  hero.isActive)[0]

    return (
        <HeroSlider 
            screenSize={screenSize}
            sectionName="hero"
            item={hero}

            elementState={heroState}
            setElementState={setHeroState}

            activeElement={activeHero}
            setActiveElement={setActiveHero}
        />
    )
}