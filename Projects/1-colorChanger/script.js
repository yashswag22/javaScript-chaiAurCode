const buttons = document.querySelectorAll(".button")
console.log(buttons)

//console.log(buttons[0])

const body = document.querySelector("body");

buttons.forEach(
    function (button){
        console.log(button)
        // here event happens on the button so add event-listener on it
        button.addEventListener("click",function(nameOfEvent){
            console.log(nameOfEvent)
            console.log(nameOfEvent.target) ; // target give the source of event/ ki event aa kaha se raha hai
            body.style.backgroundColor = nameOfEvent.target.id;
            button.innerHTML = `✓`;
        }
        )
    }
)