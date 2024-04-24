import React, {useState, useEffect} from "react";
import Selector from "./Selector";
import { TwicImg } from "@twicpics/components/react";


export default function HeroSlider({screenSize, sectionName, item, elementState, setElementState, activeElement, setActiveElement}) {
    const imageName = `${sectionName}-${item.id}-desktop.jpg`
    return (
        <div 
            key={`${sectionName}__${item.id}`}
            className={`heroslider__section ${sectionName} ${sectionName}__${item.id}`}
        >
            <div className="image-container">
                <TwicImg src={`${sectionName}/${imageName}`} focus="auto" mode="cover" ratio="none" className="TwicImg"/>
            </div>
            <h1 className={`${sectionName}__title title`}>{item.title}</h1>
            <p className={`${sectionName}__text text`}>{item.text}</p>
            <div className="button__row">
                {
                    item.buttons.map((button, idx) => {
                        return <button 
                                    key={`${sectionName}__button${idx}`}
                                    className={button.className}
                                >{button.text}</button>
                    })
                }
            </div>
            {
                item.slogan.length > 0 &&
                <div className="slogan__container">
                    {
                        item.slogan.map((text, idx) => {
                            return <p 
                                        key={`${sectionName}__slogan${idx}`}
                                        className="slogan__text"
                                    >{text}</p>
                        })
                    }
                </div>
            }
            <Selector 
                state={elementState}
                setState={setElementState}
                active={activeElement}
                setActive={setActiveElement}
            />
        </div>
    )
}