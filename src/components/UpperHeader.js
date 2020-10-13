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
// import headers from '../CSS/headers.css'

import text from '../JsonFiles/hebrew.json'
// import {SearchBarHomeMade} from './SearchBarHomeMade'
// import {SearchBarHomeMadeV2} from './SearchBarHomeMadeV2'
// import {BoardsModal} from './BoardsModal'

 
//  import { HeaderStyler } from './HeaderStyler';
 

// 
  

// <i class="fas fa-search"></i> 
 
 
 const UpperHeader = (props) => {
     let studentHeader = text.header.studentHeader.links
     useEffect(()=>{  }  
     )
    return ( 
        <div id="upper-header"  class="header-wrapper flexrowSpace-between upper-header">
        <ul class="flexRowSpaceAround">
       
        <li>
        <a>{studentHeader.studentEntry}</a>

        </li>
        <li>
        <a>{studentHeader.blog}</a>

        </li>
        <li>
        <a>{studentHeader.studentBenfits}</a>
        </li>
        <li>
        <a>{studentHeader.studyConsulting}</a>
        </li>
        <li >
        <a>{studentHeader.studentService}</a>
        </li>
        </ul>

         <div    class="formContainer">
        <form  action="https://www.hackeru.co.il/site-search"  >
        <input class="" placeholder="חיפוש" name="text"/>
        <div class="wl"> </div>
        <button id=" ">
        <img src="https://www.hackeru.co.il/assets/site/images/search.png" alt=""/>        </button>
   
        </form>


        </div>
  
       
            </div>
            
  

 
    )
}
export default (UpperHeader);

 