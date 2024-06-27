window.addEventListener('load', bindEvents)
var flag = true;
var count = 0;
var buttons;
var btn;
var out;
function bindEvents(){
    buttons = document.getElementsByTagName('button')
    for(var i = 0; i<buttons.length; i++){
        buttons[i].addEventListener('click', printXorZero)
    }
    btn = document.getElementById('reset')
    btn.addEventListener('click', reset)
}
//maintain a counter to check if count goes > 4 then heck game over conditions
function isGameOver(){
    //in gameover conditions 
    //1. row value are same
    //2. column value arw same
    //3. diagonal value are same
    //click shouldnt work after gameover


    out = document.getElementById('output')
    if(count > 4){
        //row check
        for (var i = 0; i < 9; i += 3) {
            if(buttons[i].innerText && buttons[i].innerText == buttons[i+1].innerText && buttons[i].innerText == buttons[i+2].innerText){
                // alert(`Game Over WINNER is ${buttons[i].innerText}`)
                out.innerText = `Game Over WINNER is ${buttons[i].innerText}`
                
                disable()
            }
        }
        
        //column check
        for (var i = 0; i < 3; i++){
            if(buttons[i].innerText && buttons[i].innerText == buttons[i+3].innerText && buttons[i].innerText == buttons[i+6].innerText){
                // alert(`Game Over WINNER is ${buttons[i].innerText}`)
                out.innerText = `Game Over WINNER is ${buttons[i].innerText}`
                disable()
            }
        }
        //diagonal check
        if(buttons[0].innerText && buttons[0].innerText == buttons[4].innerText && buttons[0].innerText == buttons[8].innerText){
            // alert(`Game Over WINNER is ${buttons[0].innerText}`)
            out.innerText = `Game Over WINNER is ${buttons[0].innerText}`
            disable()
        }
        
        if(buttons[2].innerText && buttons[2].innerText == buttons[4].innerText && buttons[2].innerText == buttons[6].innerText){
            // alert(`Game Over WINNER is ${buttons[2].innerText}`)
            out.innerText = `Game Over WINNER is ${buttons[2].innerText}`
            disable()
        }

        
        
    }
    //draw
    if(count > 9){
        // alert(`Game Draw`)
        out.innerText = "Game Draw"
        disable()
    }
}
function disable(){
    for(var i = 0 ;i < buttons.length; i++){
        buttons[i].disabled = true;
        btn.disabled = false
    }
}

// function setTime(){
//     setTimeout(function(){
//         reset();
//     }, 5000);
// }

function reset(){
    for(var i = 0; i < buttons.length; i++){ 
        buttons[i].disabled = false;
        buttons[i].innerText = "";
    }
    btn.innerText = "RESET"
    out.innerText = ""
    count = 0;
}
function printXorZero(){
    if(this.innerText.trim().length == 0){
        var buttonValue = flag?"X":"0"
        this.innerText = buttonValue
        flag = !flag
        count++;
        isGameOver()
    }
}
