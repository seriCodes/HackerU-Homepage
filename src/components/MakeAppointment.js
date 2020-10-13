import React from 'react'
import {Button} from './common/Button'

export const MakeAppointment = () => {
    const makeMeeting=()=>{
        alert("we'll contact you :)")
    }
    return (
        <div class="make-appointment-container">

<div class="button-make-appointment-container">
        <Button class1="button-make-appointment" callBack={makeMeeting}>
          <div class=" ">קביעת פגישה
          </div>
         </Button>
         </div>
        </div>
    )
}
