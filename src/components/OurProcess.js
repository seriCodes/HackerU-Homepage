import React from 'react'
import {CircleContainer} from './CircleContainer'

// CircleContainer
export const OurProcess = () => {
    return (
        <div class="our-process-container">
        <h4>התהליך שלנו</h4>
        
        <div class="process-stages-container">
        <div class="stage stage1  show-on-scroll bounceInRight-setting-1" animation-class="process-step-animation-reset" data-wow-delay="0.1s" >
        <CircleContainer class1=" circle-process"  >
            <span>1</span>
        </CircleContainer>
        <h3>
            פגישת ייעוץ
        </h3>
        <div class="line"></div>
        <p>
            בפגישה נערך ראיון אישי עם המועמד, אנו בודקים את הרקע שלו ואת יכולת ההשתלבות שלו בתעשייה
        </p>
    </div>
   
    <div class="stage stage2 show-on-scroll  bounceInRight-setting-2" animation-class="process-step-animation-reset" data-wow-delay="0.3s" >
    <img src="https://www.hackeru.co.il/assets/site/images/level_vector.png" alt="" class="vc"/>

    <CircleContainer class1=" circle-process"  >
        <span>2</span>
    </CircleContainer>
    <h3>
    קורס מיון
    </h3>
    <div class="line"></div>
    <p>
    שלב זה אורך בין 40-20 שעות על מנת לבדוק את  יכולות המועמד ללימודי המשך ולהשמה בעבודה. לא עברת את שלב המיון ? תקבל החזר כספי של שכר הלימוד ששילמת     
    </p>
</div>

 

<div class="stage stage3  show-on-scroll bounceInRight-setting-3" data-wow-delay="0.6s" animation-class="process-step-animation-reset">
<img src="https://www.hackeru.co.il/assets/site/images/level_vector.png" alt="" class="vc"/>

<CircleContainer class1=" circle-process"  >
    <span>3</span>
</CircleContainer>
<h3>
ללכת על בטוח
</h3>
<div class="line"></div>
<p>
אחרי שעברת את שלב המיון בהצלחה ונשמת לרווחה, תקבל התחייבות חוזית לעבודה ומלגת לימודים עד 7,000 ₪ תלוי במסלול שבחרת
</p>
</div>



<div class="stage stage4 show-on-scroll  bounceInRight-setting-4" data-wow-delay="0.9s" animation-class="process-step-animation-reset">
<img src="https://www.hackeru.co.il/assets/site/images/level_vector.png" alt="" class="vc"/>

<CircleContainer class1=" circle-process"  >
    <span>4</span>
</CircleContainer>
<h3>
מתחילים ללמוד
</h3>
<div class="line"></div>
<p>
הלימודים אצלנו פרקטיים ומטרתם לשלב את הבוגרים שלנו בתעשייה, לצורך זה תוכנית הלימודים שלנו היא המקצועית והמקיפה ביותר  ובזכותה אנחנו מספר אחת בהשמת בוגרים בהייטק
</p>
</div> 
    </div>
    
    
    
    
    </div>
    )
}
