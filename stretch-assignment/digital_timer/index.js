const digits = document.querySelector(".digits");
const secondTens = document.getElementById("secondTens");
const secondOnes = document.getElementById("secondOnes");
const msHundreds = document.getElementById("msHundreds");
const msTens = document.getElementById("msTens");

let stopTimer = false;
let timerStarted = false;

function timer(){
    start();

    function start(){
        timerStarted = true;
        let ms = 0;
        msTens.innerHTML = "0";
        msHundreds.innerHTML = "0";
        secondOnes.innerHTML = "0";
        secondTens.innerHTML = "0";

        const timerInterval = window.setInterval(function(){
            ms += 10;
            if(ms === 10000){
                endTimer(timerInterval);
            } else if (stopTimer){
                resetTimer(timerInterval);
                return;
            }
            updateTimer(ms);
        }, 10)
    }

    function increment(string){
        let number = Number(string) + 1;
        return number.toString();
    }

    function endTimer(intervalName){
        clearInterval(intervalName);
        timerStarted = false;
        stopTimer = false;
        document.getElementById('timerButton').removeAttribute('disabled')
        Array.from(digits.children).forEach(function(ele){
            ele.classList.add('redDigit');
        })
    }

    function resetTimer(intervalName){
        clearInterval(intervalName);
        timerStarted = false;
        stopTimer = false;
        msTens.innerHTML = "-";
        msHundreds.innerHTML = "-";
        secondOnes.innerHTML = "-";
        secondTens.innerHTML = "-";
        document.getElementById('timerButton').removeAttribute('disabled')
    }

    function updateTimer(ms){
        if(ms === 10000){
            msTens.innerHTML = "0";
            msHundreds.innerHTML = "0";
            secondOnes.innerHTML = "0";
            secondTens.innerHTML = "1";
        } else if ( ms % 1000 === 0 ){
            msTens.innerHTML = "0";
            msHundreds.innerHTML = "0";
            secondOnes.innerHTML = increment(secondOnes.innerHTML);
        } else if ( ms % 100 === 0 ){
            msTens.innerHTML = "0";
            msHundreds.innerHTML = increment(msHundreds.innerHTML);
        } else {
            msTens.innerHTML= increment(msTens.innerHTML);
        }
    }
}
    
function resetTimer(){
    stopTimer = true;
}

function removeRed(){
    Array.from(digits.children).forEach(function(ele){
        ele.classList.remove('redDigit');
    })
}


document.getElementById('timerButton').onclick = function runTimer(){
    removeRed();
    document.getElementById('timerButton').setAttribute('disabled', "");
    timer();
}

document.getElementById('timerReset').onclick = function timerReset(){
    if (stopTimer === false && timerStarted === true){
        resetTimer();
    } else {
        msTens.innerHTML = "-";
        msHundreds.innerHTML = "-";
        secondOnes.innerHTML = "-";
        secondTens.innerHTML = "-";
        removeRed();
    }
    document.getElementById('timerButton').removeAttribute('disabled')
}


    

