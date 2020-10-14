export function makeModalVisibleAfterScroll (elementDistanceCalculation,distance, modal,setmodalAppeared,modalAppeared,addClass){
  window.addEventListener('scroll', modalAfterScrollDistance)
  
  function modalAfterScrollDistance (e)   
  {
    let rect = elementDistanceCalculation.getBoundingClientRect();
    let rectTop=rect.top*-1;
    console.log("rect rect", rect)
    console.log("modalAppeared makeModalVisibleAfterScroll", modalAppeared)

if(rectTop>distance && !modalAppeared && modal){

  modal.classList.remove("displayNone")
setmodalAppeared(true)
setTimeout( ()=>modal.classList.add(addClass),100 )

window.removeEventListener('scroll',modalAfterScrollDistance)
}
      console.log("modal'scroll", elementDistanceCalculation)
      //  return scrollHandler(e,animatedElements)
  } 
}

function getTopDistanceFromBodyTop(){

}
export function makeElementsAnimationOnScroll( animatedElements){
     window.addEventListener('scroll', (e)=>  
    {
        console.log("addEventListener('scroll", animatedElements)
         return scrollHandler(e,animatedElements)
    } ) 
    function scrollHandler(e,animatedElements){
        console.log('scrollHandler e',e)

    console.log('scrollHandler',animatedElements)
    toggleElementsInViewPort(animatedElements)


    }
    
}

export function toggleElementsInViewPort( elementsToShow){
    console.log("elementsToShow animation-class toggleElementsInViewPort", elementsToShow[0].getAttribute("animation-class"))
    console.log("elementsToShow", elementsToShow)

    elementsToShow &&  elementsToShow.forEach(function (element) {
      let animationClass=element.getAttribute("animation-class")
      console.log("animationClass", animationClass)

        console.log("toggleElementsInViewPort")
//         isElementInViewport(element)? toggleElementClass(element,true,'displayNone')
// :toggleElementClass(element,false,'displayNone')
if(isElementInViewport(element) ){  
  console.log("isElementInViewport tr")
  element.classList.remove('not-visible')
    setTimeout(()=>{
      element.classList.add(animationClass)

    },10)
} 

    })
    }
    function toggleElementClass(element,isAdd,className){
        console.log("toggleElementClass",isAdd)
        isAdd ? element.classList.remove(className):element.classList.add(className);
       // !isAdd && element.classList.remove(className);
     }

function isElementInViewport(el) {
   console.log("isElementInViewport",el)
    var rect = el.getBoundingClientRect();
    console.log("isElementInViewport rect",rect)
    console.log("rect.top <= 0  && rect.bottom >= 0",rect.top <= 0  && rect.bottom >= 0)
    console.log("(rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && ",(rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight)))



    console.log("rect.top >=",(rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)))

    return ( 
      (rect.top <= 0  && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
  }

