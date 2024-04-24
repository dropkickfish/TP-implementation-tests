import React, {useState, useEffect, useRef} from "react";
import HeroSlider from "./HeroSlider";
import mainDataJSON from "../mainData.json"
import { TwicVideo } from '@twicpics/components/react';


export default function VideoHero({screenSize}) {

    return (
        <TwicVideo src='/video-task/video-twicpics.mp4' duration={3} posterFrom={74} step={500} />
    )
}