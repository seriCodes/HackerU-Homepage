import React from 'react'
import {CoursesIconsLinks} from './CoursesIconsLinks'
import {UserDetails} from './UserDetails'
import {HackerUinfoLinks} from './HackerUinfoLinks'



export const FourthLine = () => {
    return (
        <div class="fourth-line">
        <CoursesIconsLinks></CoursesIconsLinks>
      <UserDetails></UserDetails>
      <HackerUinfoLinks screenSize="big-screen"></HackerUinfoLinks>

      </div>
    )
}
