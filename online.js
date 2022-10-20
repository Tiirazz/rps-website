class Hand{
    constructor(){
        this.fingers = [false, false, false, false, false];
        this.gesture = "Rock"
    }
    
    switchFinger(index){
        this.fingers[index] = !this.fingers[index];

        let decimal = getDecimalFromBinaryArray(hand.fingers)
        if (decimal == 0){
            this.gesture = "Rock"
        }
        else if (decimal == 6){
            this.gesture = "Scissors"
        }
        else if (decimal == 31){
            this.gesture = "Paper"
        }
        else{
            this.gesture = "?"
        }
    }
}

function onFingerClicked(index){
    if (choosing){
        hand.switchFinger(index)
    }
}

function getDecimalFromBinaryArray(binary){
    let decimal = 0;
    for (let i = 0; i < binary.length; i++){
        decimal += binary[i] * Math.pow(2, i);
    }
    return decimal;
}

function countDown(){
    counter = document.getElementById("counter");
    setTimeout(function(){
        counter.innerHTML--;
        if ()
        setTimeout(cycle, 1000);
    }, 1000);
}

var hand = new Hand();
var choosing = true;