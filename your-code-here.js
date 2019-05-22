let carObj = {
    direction: 'right'
}

function tick() {
    let car = document.querySelector('#car'); //get reference to car
    move(car, 8, carObj.direction); //move the car left
}

function move(element, increment, direction) {
    isOverIntersection(element, direction);
    let props = getProps(element); //get the positional information you need to move an element
    
    switch(direction){
        case 'right':
            element.style.left = (props.left + increment) + 'px'; //move element
        break;
        case 'left':
            element.style.left = (props.left - increment) + 'px'; //move element
        break;
        case 'up':
            element.style.top = (props.top - increment) + 'px'; //move element
        break;
        case 'down':
            element.style.top = (props.top + increment) + 'px'; //move element
        break;
    }
}


// TODO : create a function that turns / rotates ( css ) the car

function isOverIntersection(element, direction){
    
    let props = getProps(element); 
    let carTop = props.top;
    let carLeft = props.left;

    switch(direction) {
        case "right":
            let dInt = document.getElementById('intersection-top-right');
            let int1Top = dInt.offsetTop;
            let int1Left = dInt.offsetLeft;

            if(carTop > int1Top && carLeft > int1Left){
                turn(element, direction)
            } else {
                console.log("Not In Intersection")
            }
        break;
        case "left":
            let rInt = document.getElementById('intersection-bottom-left');
            let int3Top = rInt.offsetTop;
            let int3Left = rInt.offsetLeft;

            if(carTop > int3Top && carLeft < int3Left + 30){
                turn(element, "right3")
            } else {
                console.log("Not In Intersection")
            }
        break;

        case "up":
            let uInt = document.getElementById('intersection-top-left');
            let int4Top = uInt.offsetTop;
            let int4Left = uInt.offsetLeft;

            if(carTop < int4Top + 30 && carLeft < int4Left + 30 ){
                turn(element, "right4")
            } else {
                console.log("Not In Intersection")
            }
        break;

        case "down":
            let lInt = document.getElementById('intersection-bottom-right');
            let int2Top = lInt.offsetTop;
            let int2Left = lInt.offsetLeft;

            if(carTop > int2Top + 20  && carLeft > int2Left){
                turn(element, "right2")
            } else {
                console.log("Not In Intersection")
            }
        break;
    }

}

function turn(element, direction) {
    switch(direction){
        case 'right':
            element.style.transform = "rotate(90deg)";
            carObj.direction = 'down'
        break;
        case 'right2':
            element.style.transform = "rotate(180deg)";
            carObj.direction = 'left'
        break;
        case 'right3':
            element.style.transform = "rotate(270deg)";
            carObj.direction = 'up'
        break;
        case 'right4':
            element.style.transform = "rotate(360deg)";
            carObj.direction = 'right'
        break;
    }
}