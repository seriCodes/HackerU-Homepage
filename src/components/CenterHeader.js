import React, { useState, useEffect } from "react";
import text from "../JsonFiles/hebrew.json";
import data from "../JsonFiles/data.json";

import {dropdownTitleClicked,dropdownCloseOnWindowClicked,makeMenuAppear} from '../functions/dropdown'
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

// import SearchBar from './SearchBar'
// import {SearchBarHomeMade} from './SearchBarHomeMade'
// import {SearchBarHomeMadeV2} from './SearchBarHomeMadeV2'
// import {BoardsModal} from './BoardsModal'

//  import { HeaderStyler } from './HeaderStyler';
const CenterHeader = (props) => {
  let dropDownHeadLines = text.header.dropDownMenu;
  let courses = text.header.links.courses;
  dropdownCloseOnWindowClicked()
  useEffect(() => {});
  return (
    <div class="  header-wrapper center-header ">
    <div class="logo-hamburger-container">
    <span>
        <img src={data.centerHeader.logo} />
      </span>
      <div id="hamburger-butt" onClick={(e)=>
        makeMenuAppear(e,"dropdowns-menu-id-small-screen","transition-height" ) 
    } >
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      </div>
      </div>

      <ul id="" class="drpd-titles big-screen">
      <li  class="first-li">
        <span   onClick={(e)=>dropdownTitleClicked(e)}> {dropDownHeadLines.courses}</span>
        <div  class="dropdown dropdown-header-center displayNone" id="" 
        onClick={(e)=>e.stopPropagation()}>
          <div class="dropdown-col-header-center" id="courses-col1">
            <ul>
              <li>{courses.cyber}</li>
              <li>{courses.fullStack}</li>
              <li>{courses.networkManagementCourse}</li>
              <li>{courses.digitalMarketingCourse}</li>
              <li>{courses.qa}</li>
            </ul>
          </div>
          <div class="dropdown-col-header-center" id="courses-col2">
            <ul>
              <li>{courses.cyber}</li>
              <li>{courses.fullStack}</li>
              <li>{courses.networkManagementCourse}</li>
              <li>{courses.digitalMarketingCourse}</li>
              <li>{courses.qa}</li>
            </ul>
          </div>
          <div class="dropdown-col-header-center" id="courses-col3">
          <ul>
            <li>{courses.cyber}</li>
            <li>{courses.fullStack}</li>
            <li>{courses.networkManagementCourse}</li>
            <li>{courses.digitalMarketingCourse}</li>
            <li>{courses.qa}</li>
          </ul>
        </div>
     
       
          </div>
      </li>
      <li class="first-li">
        <span   onClick={(e)=>dropdownTitleClicked(e)}>{dropDownHeadLines.aboutUs}</span>
        <div  class="dropdown dropdown-header-center displayNone" id="" 
        onClick={(e)=>e.stopPropagation()}>
        
        <div class="dropdown-col-header-center" id="courses-col1">
        <ul>
          <li>{courses.cyber}</li>
          <li>{courses.fullStack}</li>
          <li>{courses.networkManagementCourse}</li>
          <li>{courses.digitalMarketingCourse}</li>
          <li>{courses.qa}</li>
        </ul>
      </div>
        </div>
      </li>
      <li class="first-li">
        <span onClick={(e)=>dropdownTitleClicked(e)}>{dropDownHeadLines.whyUs}</span>

            <div  class="dropdown dropdown-header-center displayNone" id="" 
        onClick={(e)=>e.stopPropagation()}>
        
        <div class="dropdown-col-header-center" id="courses-col1">
        <ul>
          <li>{courses.cyber}</li>
          <li>{courses.fullStack}</li>
          <li>{courses.networkManagementCourse}</li>
          <li>{courses.digitalMarketingCourse}</li>
          <li>{courses.qa}</li>
        </ul>
      </div>
        </div>
      </li>
      <li class="first-li">
        <span>{dropDownHeadLines.assigning}</span>
      </li>
      <li class="first-li">
        <span>{dropDownHeadLines.map}</span>
      </li>

      <li class="first-li">
        <span>{dropDownHeadLines.stories}</span>
      </li>

      <li class="first-li">
        <span>{dropDownHeadLines.blog}</span>
      </li>

      <li class="first-li" class="no-arrow">
        {dropDownHeadLines.rentClass}
      </li>
    </ul>


        <ul id="dropdowns-menu-id-small-screen" class="drpd-titles small-screen displayNone">
          <li  class="first-li">
            <span   onClick={(e)=>dropdownTitleClicked(e)}> {dropDownHeadLines.courses}</span>
            <div  class="dropdown dropdown-header-center displayNone" id="" 
            onClick={(e)=>e.stopPropagation()}>
              <div class="dropdown-col-header-center" id="courses-col1">
                <ul>
                  <li>{courses.cyber}</li>
                  <li>{courses.fullStack}</li>
                  <li>{courses.networkManagementCourse}</li>
                  <li>{courses.digitalMarketingCourse}</li>
                  <li>{courses.qa}</li>
                </ul>
              </div>
              <div class="dropdown-col-header-center" id="courses-col2">
                <ul>
                  <li>{courses.cyber}</li>
                  <li>{courses.fullStack}</li>
                  <li>{courses.networkManagementCourse}</li>
                  <li>{courses.digitalMarketingCourse}</li>
                  <li>{courses.qa}</li>
                </ul>
              </div>
              <div class="dropdown-col-header-center" id="courses-col3">
              <ul>
                <li>{courses.cyber}</li>
                <li>{courses.fullStack}</li>
                <li>{courses.networkManagementCourse}</li>
                <li>{courses.digitalMarketingCourse}</li>
                <li>{courses.qa}</li>
              </ul>
            </div>
         
           
              </div>
          </li>
          <li class="first-li">
            <span   onClick={(e)=>dropdownTitleClicked(e)}>{dropDownHeadLines.aboutUs}</span>
            <div  class="dropdown dropdown-header-center displayNone" id="" 
            onClick={(e)=>e.stopPropagation()}>
            
            <div class="dropdown-col-header-center" id="courses-col1">
            <ul>
              <li>{courses.cyber}</li>
              <li>{courses.fullStack}</li>
              <li>{courses.networkManagementCourse}</li>
              <li>{courses.digitalMarketingCourse}</li>
              <li>{courses.qa}</li>
            </ul>
          </div>
            </div>
          </li>
          <li class="first-li">
            <span onClick={(e)=>dropdownTitleClicked(e)}>{dropDownHeadLines.whyUs}</span>

                <div  class="dropdown dropdown-header-center displayNone" id="" 
            onClick={(e)=>e.stopPropagation()}>
            
            <div class="dropdown-col-header-center" id="courses-col1">
            <ul>
              <li>{courses.cyber}</li>
              <li>{courses.fullStack}</li>
              <li>{courses.networkManagementCourse}</li>
              <li>{courses.digitalMarketingCourse}</li>
              <li>{courses.qa}</li>
            </ul>
          </div>
            </div>
          </li>
          <li class="first-li">
            <span>{dropDownHeadLines.assigning}</span>
          </li>
          <li class="first-li">
            <span>{dropDownHeadLines.map}</span>
          </li>

          <li class="first-li">
            <span>{dropDownHeadLines.stories}</span>
          </li>

          <li class="first-li">
            <span>{dropDownHeadLines.blog}</span>
          </li>

          <li class="first-li" class="no-arrow">
            {dropDownHeadLines.rentClass}
          </li>
        </ul>
    <div class="soldier-calling">
    
    חייל <br/>
     משוחרר?
    <a href="https://www.hackeru.co.il/soldiers" alt="כפתור המוביל לדף חיילים משוחררים">לחץ/י כאן</a>
    


    </div>
   
       </div>
  );
};
export default CenterHeader;

 
