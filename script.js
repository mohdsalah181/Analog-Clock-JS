const hourHand = document.querySelector('[data-hour-hand]');
const minHand = document.querySelector('[data-min-hand]');
const secHand = document.querySelector('[data-sec-hand]');

setInterval(setClock, 1000);

function setClock() {
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds()/60;
    const minutesRatio = (secondRatio + currentDate.getMinutes())/60;
    const hoursRatio = currentDate.getHours()/12;
    
    setRotation(secHand, secondRatio);
    setRotation(minHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();



/* The Algorithm :

    1. loop through 1 sec interval
    2. inside the loop:

        ----- The Seconds arrow movemet -----
        a. get the ratio of the second by divide it over 60 (this ratio will be multiplied on 360 to get the 
           degree on the circle). this way will allows to convert the seconds into degree.
        
        ----- The minutes arrow movement -----
        a. convert the current minute into degree by dividing it over 60 & then multiply it on 360.
        b. to move the minute arrow smoothly add the second ration to the minute ratio and then divide them over 60


        


*/
