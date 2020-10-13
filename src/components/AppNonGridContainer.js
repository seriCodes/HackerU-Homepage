import React from 'react'
import AppContainer from './AppContainer';  
import {ModalCenter} from './ModalCenter';  
import CenterHeader from './CenterHeader';  
import UpperHeader from './UpperHeader';  


import {centerHeader} from '../CSS/centerHeader.css';  
import  '../CSS/app-container.css'
import headers from '../CSS/headers.css'
import IconsLinks from '../CSS/IconsLinks.css'
import   '../CSS/fourth-line.css'
import   '../CSS/HackerUinfoLinks.css'



import {generalStyle} from '../CSS/generalStyle.css';  
import {Shapes} from '../CSS/Shapes.css';  
import {backgroundImages} from '../CSS/backgroundImages.css';  
import {text} from '../CSS/text.css';  
import {lowerHeader} from '../CSS/lowerHeader.css';  
import    '../CSS/user-details.css';  
import    '../CSS/Hacker-u-advantages.css';  
import    '../CSS/how-it-works.css';  
import    '../CSS/sixth-line.css';  
import    '../CSS/our-process.css';  
import    '../CSS/make-appointement.css';  
import    '../CSS/side-auto-moving-text.css';  


//             <ModalCenter></ModalCenter>
    

export const AppNonGridContainer = () => {
    return (
        <div class ="app-NonGrid-container">
        <UpperHeader></UpperHeader>
        <CenterHeader></CenterHeader>
        <AppContainer></AppContainer>

        </div>
    )
}

//         <div class ="CenterHeader-container">        </div>


