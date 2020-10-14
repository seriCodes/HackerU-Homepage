import React , {useState,useEffect} from 'react';
import {makeElementsAnimationOnScroll,makeModalVisibleAfterScroll, toggleElementsInViewPort} from '../functions/scrollFunctions';  
import UpperHeader from './UpperHeader';  
import LowerHeader from './LowerHeader';  
 import {FourthLine} from "./FourthLine";
 import {HackerUinfoLinks} from './HackerUinfoLinks';  
 import {HackerUadvantages} from './HackerUadvantages';  
 import {SixthLine} from './SixthLine';  
 import {SideAutoMovingText} from './SideAutoMovingText';  

 
 // SideAutoNovingText import {ContainersStructure} from "./ContainersStructure";
//  import {MainContent} from "./MainContent";

//   import {FooterContainer} from './Footer/FooterContainer'
//  import {StickyPicture} from './common/StickyPicture'
 
//  import {appContainer } from "./appContainer.css";





function AppContainer(props) {
    const [check,setCheck]=useState(true)
    const [modalAppeared,setmodalAppeared]=useState(false)

    useEffect(()=>{
        
        var elementsToShow = document.querySelectorAll('.show-on-scroll'); 
        console.log("elementsToShow app",elementsToShow)
        console.log("elementsToShow [0]",elementsToShow[0])
        console.log("elementsToShow [0] animation-class",elementsToShow[0]['animation-class'])

        console.log("elementsToShow [0] animation-class attributes typeof",typeof( elementsToShow[0]['attributes']['animation-class']))

        console.log("elementsToShow [0] animation-class attributes animation-class",  elementsToShow[0]['attributes']['animation-class'] ) 


        console.log("elementsToShow [0] animation-class attributes getAttribute() ",  elementsToShow[0].getAttribute("animation-class")   ) 

        
        makeElementsAnimationOnScroll(elementsToShow)
        toggleElementsInViewPort(elementsToShow)
let counter=1

let body = document.querySelector("body")
// let centerModal = document.getElementById("registration-modal")
 
// let centerModal22 = document.querySelector("#registration-modal")

let centerModal  = document.querySelector(".registration-modal")

// console.log("centerModal", centerModal)
// console.log("centerModal22", centerModal22)
// console.log("centerModal33", centerModal33)

console.log("modalAppeared app ", modalAppeared)

  makeModalVisibleAfterScroll(body,300,centerModal,setmodalAppeared,modalAppeared,"shadower_Modal_opened" )

window.addEventListener("load", (e)=>{
    console.log("load counter")

    // document.querySelector("register-modal").classList.remove("displayNone")
            setCheck(!check)
        });

console.log("counter",counter++)

    })
    // const ContainersStructureObj= new ContainersStructure()

//
//  window.addEventListener('scroll', ()=> scrollHandler(a++))

// function scrollHandler(a){
// console.log('scrollHandler',a)
// }

// 


     React.useEffect(() => {    }
    // , []
    )
   
    return (
        <div class ="app-container">
      

        <div class="gardientRow"> </div>
        <LowerHeader></LowerHeader> 
<FourthLine></FourthLine>

<HackerUinfoLinks screenSize={'small-screen'}></HackerUinfoLinks>
<HackerUadvantages></HackerUadvantages>        
<div class="fith-line"></div>
<div class="sixth-line-background"> </div>
<SixthLine></SixthLine>

 <SideAutoMovingText></SideAutoMovingText>



</div>
    );
}

export default AppContainer;
//            <div class="blueRow"> </div>
// <UpperHeader></UpperHeader> 
//         <div class="whiteRow">  </div>






 // <div class="not-grid-item"> <CenterHeader></CenterHeader> </div>
       
//        </div>  
//        </div>  

// <CenterHeader></CenterHeader>  
// 

// <div  class ='main-area-container'> 

//               {props.children} 
     
// <div class="show-on-scroll not-visible">ddd</div>
//      </div> 

 

//     <footer class='footer-area-container'
// style={{ 
//     borderStyle:"groove",
//    borderColor: "purple",
//    borderWidth: "17px", }}>  

// </footer> 
