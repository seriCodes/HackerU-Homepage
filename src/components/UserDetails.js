import React from 'react'
// action="https://www.hackeru.co.il/thanks?"
export const UserDetails = () => {
    return (
        <div class="user-details-first-container ">
        <div 
        class="empty-space-user-details  "> 
        </div>
 
        <div class="user-details-container ">
        
        <div class="user-details-headline big-screen">רוצה לשמוע עוד?</div>

        <div class="user-details-headline small-screen"> צרו קשר לכל שאלה (מלאו פרטיכם ונחזור אליכם בהקדם) </div>

        <form id="contact-from-general" class="form contact-information" method="post" >
  
    
     
        <div class="input">
          <label for="name">שם מלא <span>|</span></label>
          <input type="text" name="name" id="name"/>
         </div>					
        <div class="input">
          <label for="phone">טלפון <span>|</span></label>
          <input type="text" name="phone" id="phone"/>
         </div>					
        <div class="input">
          <label for="email">אי-מייל <span>|</span></label>
          <input type="text" name="email" id="email"/>
         </div>
        <div class="check">


          <input    type="checkbox" id="checkbox" value="1" class="checkbox" name="check"/>


          <label for="checkbox" class="sp">אני מאשר קבלת עדכונים ומבצעים מהאקריו בכפוף לתקנון.</label>
        </div>


        <div class="clear"></div>
        <div class="privacy-policy">
         
        
        <a 
          class="open-popup-link" href="#privacy-policy-text">מדיניות פרטיות משתמשים</a>
        </div>



        <button class="button" id="side-form-button">
          <div class="bt_in">דברו איתי!</div>
         </button>
         
         
      </form>

        </div>

        </div>
    )
}
