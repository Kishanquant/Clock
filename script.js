console.log("script")

var daillines = document.getElementsByClassName('daillines');
var clockE1 = document.getElementsByClassName('clock')[0];

console.log(daillines);
for(var i=1; i < 60; i++)
{
    clockE1.innerHTML += "<div class='daillines'></div>";
    daillines[i].style.transform = "rotate(" + 6 * i +"deg)";
}

function clock(){
    var weekday = new Array(7),
    d = new Date(),
    h = d.getHours(),
    m = d.getMinutes(),
    s = d.getSeconds(),
    date = d.getDate(),
    month = d.getMonth() + 1,
    year = d.getFullYear(),

    hDeg = h * 30 + m * (360/720),
    mDeg = m * 30 + s * (360/720),
    hDeg = s * 6,

    hE1 = document.querySelector('.hour-hand'),
    mE1 = document.querySelector('.minute-hand'),
    sE1 = document.querySelector('.second-hand'),
    dateE1 = document.querySelector('.date'),
    dayE1 = document.querySelector('.day');


    weekday[0] = "Sunday";
    weekday[0] = "Monday";
    weekday[0] = "Tuesday";
    weekday[0] = "Wednesday";
    weekday[0] = "Thursday";
    weekday[0] = "Friday";
    weekday[0] = "Saturday";

    var day = weekday[d.getDay()];
    hE1.style.transform = "rotate("+hdeg+"deg)";
    mE1.style.transform = "rotate("+mdeg+"deg)";
    sE1.style.transform = "rotate("+sdeg+"deg)";
    dateE1.innerHTML = date+"/"+month+"/"+year;
    dayE1.innerHTML = day;

}

setInterval("clock()", 100);