const clock = document.querySelector("#clock");
const timer = document.querySelector("#timer")
//console.log(date)



// setInterval(function(){},time interval in mili seconds)

setInterval(function(){
    let date = new Date();
    let time = date.toLocaleTimeString();
   // console.log(time)
   clock.innerHTML = `${time}`;
}, 1000)

