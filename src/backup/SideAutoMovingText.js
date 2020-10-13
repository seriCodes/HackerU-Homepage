import React from 'react'
// //////////////////
//attempt with js
///////////////
export const SideAutoMovingText = () => {

    React.useEffect(()=>{


       let sideScroller=document.getElementById("graduateRiver")




       sideScroller.style.position='absolute';

       let eleWidth=sideScroller.getBoundingClientRect().width
       
       console.log('eleWidth')
       console.log(eleWidth)

       let intViewportWidth = window.innerWidth;//interior width of the window in pixels

       console.log(intViewportWidth)

       sideScroller.style.right=-eleWidth+'px';


       console.log("setInterval")
    //    sideScroller.style.width='100vw';
       console.log(sideScroller.style.width )
       console.log(sideScroller)
       console.log(sideScroller.style.right)
       console.log(parseInt( sideScroller.style.right))
let movedWidthCounter=0;
let distanceUlToOppositeEdgeOfViewport=intViewportWidth+eleWidth;
console.log('distanceUlToOppositeEdgeOfViewport')

console.log(distanceUlToOppositeEdgeOfViewport)


        setInterval(() => {
 
            

    sideScroller.style.right=parseInt( sideScroller.style.right)+ 1+"px";
    movedWidthCounter+=1;
    console.log('movedWidthCounter')

    console.log(movedWidthCounter)
    if(movedWidthCounter==(intViewportWidth+eleWidth)){alert("fddd")

    }
        }, 10);
    
})



    return (
        <div class="newsticker-container">
            

        <ul id="graduateRiver" class="newsticker" >
                       <li dir="rtl">
                    //&nbsp;&nbsp;
                    <b>עידן גולדשטיין</b>,
                מבוגרי
                קורס ניהול רשתות, אבטחת מידע ומחשוב ענן,
                עובד בחברת "Novo Nordisk" בתפקיד מנהל רשת
            </li><li dir="rtl">
                    //&nbsp;&nbsp;
                    <b>מרינה לוין</b>,
                מבוגרי
                קורס QA בודק תוכנה,
                בודקת תוכנה בחברת "Pima"
            </li></ul>
        </div>
    )
}


// <li dir="rtl">
//                     //&nbsp;&nbsp;
//                     <b>אושרת קרקובר</b>,
//                 מבוגרי
//                 קורס עיצוב גרפי עם התמחות ב-UI/UX,
//                 עובדת בחברת "Tech Marketing" כמעצבת גרפית 
//             </li><li dir="rtl">
//                     //&nbsp;&nbsp;
//                     <b>שקד פסח</b>,
//                 מבוגרי
//                 קורס ניהול רשתות, אבטחת מידע ומחשוב ענן,
//                 עובד בחברת "Ness" בתפקיד Help Desk
//             </li><li dir="rtl">
//                     //&nbsp;&nbsp;
//                     <b>רוסטם חכימוב</b>,
//                 מבוגרי
//                 קורס ניהול רשתות, אבטחת מידע ומחשוב ענן,
//                 טכנאי תקשורת מקומית בבית חולים "בלינסון"
//             </li><li dir="rtl">
//                     //&nbsp;&nbsp;
//                     <b>מאור טל</b>,
//                 מבוגרי
//                 קורס QA בודק תוכנה,
//                 בודק תוכנה בחברת "ComSec Consulting"
//             </li><li dir="rtl">
//                     //&nbsp;&nbsp;
//                     <b>מיכאל גוברמן</b>,
//                 מבוגרי
//                 קורס תכנות NET.,
//                 עובד בחברת "Ami Tech" בתפקיד מתכנת
//             </li><li dir="rtl">
//                     //&nbsp;&nbsp;
//                     <b>עילי קוסובסקי</b>,
//                 מבוגרי
//                 קורס ניהול רשתות, אבטחת מידע ומחשוב ענן,
//                 מנהל רשת בחברת "Motorola"
//             </li><li dir="rtl" class="tick-clones">
//                     //&nbsp;&nbsp;
//                     <b>דן שפורן</b>,
//                 מבוגרי
//                 קורס ניהול רשתות, אבטחת מידע ומחשוב ענן,
//                 מנהל רשתות בעיריית תל אביב
//             </li><li dir="rtl" class="tick-clones">
//                     //&nbsp;&nbsp;
//                     <b>אנדריי גינדין</b>,
//                 מבוגרי
//                 קורס ניהול שרתי לינוקס (Linux),
//                 איש תמיכה טכנית בחברת "HostCenter"
//             </li><li dir="rtl" class="tick-clones">
//                     //&nbsp;&nbsp;
//                     <b>איתי עובד</b>,
//                 מבוגרי
//                 קורס QA בודק תוכנה,
//                 עובד בחברת "SpotOption" בתפקיד בודק תוכנה
//             </li><li dir="rtl" class="tick-clones">
//                     //&nbsp;&nbsp;
//                     <b>יואב גרוסמן</b>,
//                 מבוגרי
//                 קורס תכנות NET.,
//                 מפתח אתרים בחברת "Yotpo"
//             </li><li dir="rtl" class="tick-clones">
//                     //&nbsp;&nbsp;
//                     <b>אנדריי קוזין</b>,
//                 מבוגרי
//                 קורס ניהול רשתות, אבטחת מידע ומחשוב ענן,
//                 מנהל רשת וטכנאי מחשבים במכללת תל-חי
//             </li><li dir="rtl" class="tick-clones">
//                     //&nbsp;&nbsp;
//                     <b>מייקל מוסקוביץ</b>,
//                 מבוגרי
//                 קורס ניהול רשתות, אבטחת מידע ומחשוב ענן,
//                 טכנאי מחשבים ורשתות בחברת "FixMe"
//             </li><li dir="rtl" class="tick-clones">
//                     //&nbsp;&nbsp;
//                     <b>אריאל אנסבכר</b>,
//                 מבוגרי
//                 קורס שיווק דיגיטלי - קורס קידום אתרים, רשתות חברתיות, פרסום ומכירות באינטרנט,
//                 מנהל מדיה ושיווק במשרד עורכי דין המתמחה בדיני רשת.
//             </li><li dir="rtl" class="tick-clones">
//                     //&nbsp;&nbsp;
//                     <b>עודד גרוס</b>,
//                 מבוגרי
//                 קורס QA בודק תוכנה,
//                 בודק תוכנה ל- Web ול- Mobile בחברת "inManage"
//             </li><li dir="rtl" class="tick-clones">
//                     //&nbsp;&nbsp;
//                     <b>גל רבנה</b>,
//                 מבוגרי
//                 קורס ניהול רשתות, אבטחת מידע ומחשוב ענן,
//                 עובד בחברת "בינת" בתפקיד מנהל רשתות
//             </li><li dir="rtl" class="tick-clones">
//                     //&nbsp;&nbsp;
//                     <b>רון קיסר</b>,
//                 מבוגרי
//                 קורס ניהול שרתי לינוקס (Linux),
//                 SysAdmin בחברת "Jacada"
//             </li><li dir="rtl" class="tick-clones">
//                     //&nbsp;&nbsp;
//                     <b>דניאל מוסליני</b>,
//                 מבוגרי
//                 קורס QA בודק תוכנה,
//                 עובד בחברת Check Point
//             </li><li dir="rtl" class="tick-clones">
//                     //&nbsp;&nbsp;
//                     <b>אלינה אלנברג</b>,
//                 מבוגרי
//                 קורס QA בודק תוכנה,
//                 בודקת תוכנה בחברת "Bullet Solutions"
//             </li><li dir="rtl" class="tick-clones">
//                     //&nbsp;&nbsp;
//                     <b>עוזיאל סלומון</b>,
//                 מבוגרי
//                 קורס תכנות NET.,
//                 מתכנת בחברת "כלל"
//             </li><li dir="rtl" class="tick-clones">
//                     //&nbsp;&nbsp;
//                     <b>מיטל אשכנזי</b>,
//                 מבוגרי
//                 קורס שיווק דיגיטלי - קורס קידום אתרים, רשתות חברתיות, פרסום ומכירות באינטרנט,
//                 מנהלת שיווק במכללת מישלב
//             </li><li dir="rtl" class="tick-clones">
//                     //&nbsp;&nbsp;
//                     <b>עידן גולדשטיין</b>,
//                 מבוגרי
//                 קורס ניהול רשתות, אבטחת מידע ומחשוב ענן,
//                 עובד בחברת "Novo Nordisk" בתפקיד מנהל רשת
//             </li><li dir="rtl" class="tick-clones">
//                     //&nbsp;&nbsp;
//                     <b>מרינה לוין</b>,
//                 מבוגרי
//                 קורס QA בודק תוכנה,
//                 בודקת תוכנה בחברת "Pima"
//             </li><li dir="rtl" class="tick-clones">
//                     //&nbsp;&nbsp;
//                     <b>אושרת קרקובר</b>,
//                 מבוגרי
//                 קורס עיצוב גרפי עם התמחות ב-UI/UX,
//                 עובדת בחברת "Tech Marketing" כמעצבת גרפית 
//             </li><li dir="rtl" class="tick-clones">
//                     //&nbsp;&nbsp;
//                     <b>שקד פסח</b>,
//                 מבוגרי
//                 קורס ניהול רשתות, אבטחת מידע ומחשוב ענן,
//                 עובד בחברת "Ness" בתפקיד Help Desk
//             </li><li dir="rtl" class="tick-clones">
//                     //&nbsp;&nbsp;
//                     <b>רוסטם חכימוב</b>,
//                 מבוגרי
//                 קורס ניהול רשתות, אבטחת מידע ומחשוב ענן,
//                 טכנאי תקשורת מקומית בבית חולים "בלינסון"
//             </li><li dir="rtl" class="tick-clones">
//                     //&nbsp;&nbsp;
//                     <b>מאור טל</b>,
//                 מבוגרי
//                 קורס QA בודק תוכנה,
//                 בודק תוכנה בחברת "ComSec Consulting"
//             </li><li dir="rtl" class="tick-clones">
//                     //&nbsp;&nbsp;
//                     <b>מיכאל גוברמן</b>,
//                 מבוגרי
//                 קורס תכנות NET.,
//                 עובד בחברת "Ami Tech" בתפקיד מתכנת
//             </li><li dir="rtl" class="tick-clones">
//                     //&nbsp;&nbsp;
//                     <b>עילי קוסובסקי</b>,
//                 מבוגרי
//                 קורס ניהול רשתות, אבטחת מידע ומחשוב ענן,
//                 מנהל רשת בחברת "Motorola"
//             </li><li dir="rtl">
//                     //&nbsp;&nbsp;
//                     <b>דן שפורן</b>,
//                 מבוגרי
//                 קורס ניהול רשתות, אבטחת מידע ומחשוב ענן,
//                 מנהל רשתות בעיריית תל אביב
//             </li><li dir="rtl">
//                     //&nbsp;&nbsp;
//                     <b>אנדריי גינדין</b>,
//                 מבוגרי
//                 קורס ניהול שרתי לינוקס (Linux),
//                 איש תמיכה טכנית בחברת "HostCenter"
//             </li><li dir="rtl">
//                     //&nbsp;&nbsp;
//                     <b>איתי עובד</b>,
//                 מבוגרי
//                 קורס QA בודק תוכנה,
//                 עובד בחברת "SpotOption" בתפקיד בודק תוכנה
//             </li><li dir="rtl">
//                     //&nbsp;&nbsp;
//                     <b>יואב גרוסמן</b>,
//                 מבוגרי
//                 קורס תכנות NET.,
//                 מפתח אתרים בחברת "Yotpo"
//             </li><li dir="rtl">
//                     //&nbsp;&nbsp;
//                     <b>אנדריי קוזין</b>,
//                 מבוגרי
//                 קורס ניהול רשתות, אבטחת מידע ומחשוב ענן,
//                 מנהל רשת וטכנאי מחשבים במכללת תל-חי
//             </li><li dir="rtl">
//                     //&nbsp;&nbsp;
//                     <b>מייקל מוסקוביץ</b>,
//                 מבוגרי
//                 קורס ניהול רשתות, אבטחת מידע ומחשוב ענן,
//                 טכנאי מחשבים ורשתות בחברת "FixMe"
//             </li><li dir="rtl">
//                     //&nbsp;&nbsp;
//                     <b>אריאל אנסבכר</b>,
//                 מבוגרי
//                 קורס שיווק דיגיטלי - קורס קידום אתרים, רשתות חברתיות, פרסום ומכירות באינטרנט,
//                 מנהל מדיה ושיווק במשרד עורכי דין המתמחה בדיני רשת.
//             </li><li dir="rtl">
//                     //&nbsp;&nbsp;
//                     <b>עודד גרוס</b>,
//                 מבוגרי
//                 קורס QA בודק תוכנה,
//                 בודק תוכנה ל- Web ול- Mobile בחברת "inManage"
//             </li><li dir="rtl">
//                     //&nbsp;&nbsp;
//                     <b>גל רבנה</b>,
//                 מבוגרי
//                 קורס ניהול רשתות, אבטחת מידע ומחשוב ענן,
//                 עובד בחברת "בינת" בתפקיד מנהל רשתות
//             </li><li dir="rtl">
//                     //&nbsp;&nbsp;
//                     <b>רון קיסר</b>,
//                 מבוגרי
//                 קורס ניהול שרתי לינוקס (Linux),
//                 SysAdmin בחברת "Jacada"
//             </li><li dir="rtl">
//                     //&nbsp;&nbsp;
//                     <b>דניאל מוסליני</b>,
//                 מבוגרי
//                 קורס QA בודק תוכנה,
//                 עובד בחברת Check Point
//             </li><li dir="rtl">
//                     //&nbsp;&nbsp;
//                     <b>אלינה אלנברג</b>,
//                 מבוגרי
//                 קורס QA בודק תוכנה,
//                 בודקת תוכנה בחברת "Bullet Solutions"
//             </li><li dir="rtl">
//                     //&nbsp;&nbsp;
//                     <b>עוזיאל סלומון</b>,
//                 מבוגרי
//                 קורס תכנות NET.,
//                 מתכנת בחברת "כלל"
//             </li><li dir="rtl">
//                     //&nbsp;&nbsp;
//                     <b>מיטל אשכנזי</b>,
//                 מבוגרי
//                 קורס שיווק דיגיטלי - קורס קידום אתרים, רשתות חברתיות, פרסום ומכירות באינטרנט,
//                 מנהלת שיווק במכללת מישלב
//             </li>