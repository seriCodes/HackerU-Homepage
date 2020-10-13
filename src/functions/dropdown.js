export function dropdownTitleClicked(e, id,dropdownElem){
    e.stopPropagation()

// check othe dropdowns- if open- close them
displayNoneAllDropdowns()
    console.log(e)
    console.log(e.target)
    console.log(e.target.id)
    console.log(e.target.nextSibling)
let dropdown =e.target.nextSibling
console.log(dropdown)
dropdown.classList.toggle('displayNone')
}
export function dropdownCloseOnWindowClicked(){
window.addEventListener("click",clickHandler)

function clickHandler(){
    displayNoneAllDropdowns( )
}
}

function displayNoneAllDropdowns(){
let allDropdowns= document.getElementsByClassName("dropdown")
// console.log(allDropdowns)

for (const element of allDropdowns) {
    // console.log(element );
    element.classList.add("displayNone")
}

}




export function makeMenuAppear(e,id,transitionClass ){
let elem =document.getElementById(id)
if(elem.classList.contains('displayNone')){
    elem.classList.remove('displayNone')
setTimeout(()=>{
    elem.classList.add(transitionClass)
},10)

}else{
    elem.classList.remove(transitionClass)
    setTimeout(()=>{
        elem.classList.add('displayNone')
    },1700)
    
}
console.log(elem)

// elem.style
}

