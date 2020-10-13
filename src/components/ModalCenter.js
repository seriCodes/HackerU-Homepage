import React, {useEffect} from 'react'
// import {v1 as uuidv1} from "uuid";
// import {ModalHander} from './ModalHander'
// import screenSize from '../responsive/screenSize'
// import {ContainersStructure} from "./ContainersStructure";
import {ModalStyler} from '../functions/ModalStyler'
// import {Button} from './common/Button'
import {ModalExit} from './common/ModalExit'
import {UserDetailsForm} from './UserDetailsForm'
import {CircleContainer} from './CircleContainer'

import   '../CSS/modals.css'

//   default React.memo( 

    export const ModalCenter  =  (props) => {
//   let idImg= uuidv1()
//   let idModal= uuidv1()
   
//   const ModalHanderObj= new ModalHander()
 
  const ModalStylerObj= new ModalStyler()

    // useEffect(()=>{    })
  
 
    
     return (
        <div   class="registration-modal shadower_full_page_init   onlyPCrender  shadower_Modal_closed displayNone" name="shadower" id="center-modal" onClick={(e)=>{
//           e.stopPropagation()
// document.getElementById("center-modal").classList.add("displayNone")

            ModalStylerObj.toggleModal("center-modal",e, "shadower_Modal_opened","displayNone")
                 }}>
    
                  <div name="modalCentered"  class="center-modal-wrraper" onClick={(e)=>{
                    e.stopPropagation()
               }}>

               <CircleContainer class1="circle-modal">
               <div class="flexColumn-align-center noneImagesElemnts ">
               <ModalExit id="center-modal" openClass="shadower_Modal_opened" closeClass="displayNone"></ModalExit>

               <div class="hedlines-container"> 
               <div class="medium-headline">עברנו ללימודי אונליין!</div>
               <div class="large-headline">ללמוד הייטק ודיגיטל LIVE<br></br> בזמן שנוח לך
               </div>
               <div class="mini-headline">רוצה לשמוע עוד?</div>
               </div>

       
                <UserDetailsForm></UserDetailsForm>
                 </div>

                 


                 <div class="background-image image-pens"></div>

                  </CircleContainer>
             
       
                 </div>
       
 
       
      
    

          </div>
    )
}
