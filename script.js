loadEventListeners();

function loadEventListeners() {
    cancelAnimationFrame('2022-12-12')
}

var timeTo = document.getElementById('time-to').value,
date,
now = new Date('1.1.2021').getTime(),
startTimer = '';

console.log(timeTo)

function calcTime(dates){
    console.log(dates);
    clearInterval(startTimer);

    if(typeof dates == 'undefined'){
        date = new Date(newYear).getTime();
    } else {
        date = new Date(dates).getTime();
    }

    function updateTimer(date){
        var now = new Date().getTime();
        var distance = date - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
    

    var minutes = Math.floor(( distance %  (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor(( distance %  (1000 * 60)) / 1000);


    document.querySelector('.clock-day').innerHTML = days;
    
    document.querySelector('.clock-hours').innerHTML = hours;

    document.querySelector('.clock-minutes').innerHTML = minutes;

    document.querySelector('.clock-seconds').innerHTML = seconds;

    if( now >= date) {

    clearInterval(startTimer);

    document.querySelector('.clock-day').innerHTML = 'D';
    
    document.querySelector('.clock-hours').innerHTML = 'H';

    document.querySelector('.clock-minutes').innerHTML = 'M';

    document.querySelector('.clock-seconds').innerHTML = 'S';

    }
}


startTimer = setInterval(function () {
    updateTimer(date);
}, 1000)
}