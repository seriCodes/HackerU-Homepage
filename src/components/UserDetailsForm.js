import React from 'react'

export const UserDetailsForm = () => {

    const submitted= ()=>{
        alert("thanks")
    }

    return (
        <div class= "">
         <form class="flexColumn-align-center " onSubmit={submitted}>
        <input type="text" name="full-name" placeholder="שם מלא"/> 
        <input type="text" name="phone" placeholder="מספר טלפון"/> 

        <input type="email" placeholder="אימייל"/>

        <div>
        <input class=" " type="checkbox"/>
        <span class="theSmallPrint">אני מאשר קבלת עדכונים ומבצעים מהאקריו
        </span>
        </div>
        
        <input type="submit" value="לשיחת ייעוץ"/>

        </form>
         </div>
    )
}
