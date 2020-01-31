document.querySelector('#msTens').textContent = 0;
document.querySelector('#msHundreds').textContent = 0;
document.querySelector('#secondOnes').textContent = 0;
document.querySelector('#secondTens').textContent = 0;

let stopTimer = false;
let timerStarted = false;

function timer(msTens, msHundreds, secOnes, secTens){
    timerStarted = true;
    var timer = window.setInterval(function(){
        document.querySelector('#msTens').textContent = msTens;
        document.querySelector('#msHundreds').textContent = msHundreds;
        document.querySelector('#secondOnes').textContent = secOnes;
        document.querySelector('#secondTens').textContent = secTens;
        msTens++;
        if (!(msTens < 10)) {
            msTens = 0;
            msHundreds++;
            timer(msTens, msHundreds, secOnes, secTens);
        } else if (!(msHundreds < 10)){
            msHundreds = 0;
            secOnes++;
            timer(msTens, msHundreds, secOnes, secTens);
        } else if (!(secOnes < 10)){
            secOnes = 0;
            secTens++;
            timer(msTens, msHundreds, secOnes, secTens);
        } else if (secTens == 1){
            document.querySelector('#msTens').textContent = 0;
            clearInterval(timer);
            timerStarted = false;
            document.querySelector('.digits').style.color = 'red';
            document.getElementById('timerButton').removeAttribute('disabled')
        } else if (stopTimer === true){
            stopTimer = false;
            timerStarted = false;
            clearInterval(timer);
            document.querySelector('#msTens').textContent = 0;
            document.querySelector('#msHundreds').textContent = 0;
            document.querySelector('#secondOnes').textContent = 0;
            document.querySelector('#secondTens').textContent = 0;
            return;
        }
    }, 10);
}


document.getElementById('timerButton').onclick = function runTimer(){
    document.querySelector('.digits').style.color = 'black';
    document.getElementById('timerButton').setAttribute('disabled', "");
    timer(0,0,0,0);
}

document.getElementById('timerReset').onclick = function resetTimer(){
    if (stopTimer === false && timerStarted === true){
        stopTimer = true;
    }
    document.getElementById('timerButton').removeAttribute('disabled')
}


    

