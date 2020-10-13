import React, {useState, useEffect} from 'react'
// import {Button} from './common/Button'
// import {UserButton} from './common/UserButton'
// import {StyleAbstractions} from "./StyleAbstractions";
// import {ContainersStructure} from "./ContainersStructure";
// import {TextStyler} from "./TextStyler";
// import {addEventListenerAttacher} from "./addEventListenerAttacher";
// import {ModalHander} from "./ModalHander";

// import screenSize from '../responsive/screenSize'
// // import {BarsMenue} from './BarsMenue'
// import generalAlert from './buttonsAlert/generalAlert'
// import {ModalStyler} from './ModalStyler'
import headers from '../CSS/headers.css'
import text from "../JsonFiles/hebrew.json";

// import SearchBar from './SearchBar'
// import {SearchBarHomeMade} from './SearchBarHomeMade'
// import {SearchBarHomeMadeV2} from './SearchBarHomeMadeV2'
// import {BoardsModal} from './BoardsModal'

 
//  import { HeaderStyler } from './HeaderStyler'; 
 const LowerHeader = (props) => {
     let texHeadert= text.header.banner
     useEffect(()=>{  }  
     )
    return ( 
        <div   class="header-wrapper lower-header">
        
      
       
      המרכז להשמה והכשרת עובדים למקצועות ההייטק<br/>
      <span>מספר אחת בהשמת בוגרים בהייטק!</span>

      
  
            </div>
            
  

 
    )
}
export default (LowerHeader);

 