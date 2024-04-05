// genrate random background color = genrate random hexa number

const randomColor = function (){
    const hex = "0123456789ABCDEF"
    let color = "#";
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*15)];
    }
    return color;
};
console.log(randomColor());

// document.querySelector("#start").addEventListener("click" ,function(){
//    setInterval(function(){ 
//     document.body.style.backgroundColor = randomColor();
//    },1000);
// })

// ------------ or ---------------

let intervalId;
const startChangingColor = function(){
    if(!intervalId)
    intervalId = setInterval(changeBgColor,500);
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
        console.log(randomColor());
    }
}

const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null; 
}

document.querySelector("#start").addEventListener("click",startChangingColor);

document.querySelector("#stop").addEventListener("click",stopChangingColor);