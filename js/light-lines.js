var itemsHover = document.querySelectorAll(".itemHover");
var lightOn = 'rgb(0, 200, 255)';
var lightOff = 'gray';
var lightPosition = 'rgb(124, 107, 29)';

function lightControl(el, color) {
    for (var i = 0; i < el.length; i++) {
        el[i].style.stroke = color;
    };
 };

 function addEventListenerToItemsHover() {
    for (var i = 0; i < itemsHover.length; i++) {
        let lines = document.getElementsByClassName(itemsHover[i].classList[2]);

        itemsHover[i].addEventListener("mousedown", function() {
            lightControl(lines, lightOn);    
        });
        
        itemsHover[i].addEventListener("mouseup", function() {
           lightControl(lines, lightPosition);
        
        });

        itemsHover[i].addEventListener("mouseover", function() {     
        lightControl(lines, lightPosition);
        
        });
        itemsHover[i].addEventListener("mouseout", function() {     
           lightControl(lines, lightOff); 
        });
    }
}    

addEventListenerToItemsHover()