window.addEventListener('load', bindEvents);
var buttons;
var flag = true
var count = 0
var out;
var btn;


function bindEvents(){
    buttons = document.getElementsByTagName('button')
    for(var i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', XorZero);
    }
    document.getElementById('reset').addEventListener('click', reset5sec)
}

function isGameOver(){
    out = document.getElementById('output')
    for(var i = 0; i < 9; i+=3){
        if(buttons[i].innerText && buttons[i].innerText == buttons[i+1].innerText && buttons[i].innerText == buttons[i+2].innerText){
            out.innerText = `Game Over WINNER is ${buttons[i].innerText}`
            disable()
            return true
        }
    }
    for(var i = 0; i < 3; i++){
        if(buttons[i].innerText && buttons[i].innerText == buttons[i+3].innerText && buttons[i].innerText == buttons[i+6].innerText){
            out.innerText = `Game Over WINNER is ${buttons[i].innerText}`
            disable()
            return true
        }
    }
    if(buttons[0].innerText && buttons[0].innerText == buttons[4].innerText && buttons[0].innerText == buttons[8].innerText){
        out.innerText = `Game Over WINNER is ${buttons[0].innerText}`
        disable()
        return true
    }
    if(buttons[2].innerText && buttons[2].innerText == buttons[4].innerText && buttons[2].innerText == buttons[6].innerText){
        out.innerText = `Game Over WINNER is ${buttons[2].innerText}`
        disable()
        return true
    }
    return false
    

}

function disable(){
    for(var i = 0; i < buttons.length; i++){
        buttons[i].disabled = true;
    }
    document.getElementById('reset').disabled = false;

}

var countDownValue = 5
var interval;
function countDown(){
    interval = setInterval(function(){
        countDownValue--;
        out.innerText = `Game Reset in ${countDownValue} Sec`
    },1000)
}

function reset5sec(){
    countDown()
    setTimeout(function(){
        reset()
    }, 5000)
}
function reset(){
    clearInterval(interval)
    countDownValue = 5
    count = 0
    for(var i = 0; i < buttons.length; i++){
        buttons[i].innerText = ""
        buttons[i].disabled = false
    }
    document.getElementById('reset').innerText = "RESET"
    out.innerText = ""
    flag = true
}

function XorZero(){
    if(this.innerText.trim().length == 0){
        count++;
        var buttonValue = flag?"X":"0"
        this.innerText = buttonValue
        flag = !flag
        if(count > 4){
            isGameOver()
            
        }
        if(count == 9 && !isGameOver())
        out.innerText = "GAME DRAW"
    }
}
