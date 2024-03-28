const form = document.querySelector("form");

form.addEventListener("submit",function(evntName){
        evntName.preventDefault();
        
        const height = parseInt(document.querySelector("#height").value);
        const weight = parseInt(document.querySelector("#weight").value);
        const result = document.querySelector("#results");
        const classifi = document.querySelector("#classification");

        if(height === ""  || height<0 || isNaN(height)){
            result.innerHTML = `please give a valid height ${height}`;
            classifi.innerHTML = `kutreya sala dekh ke number dial kar`;
            classifi.style.backgroundColor = "yellow";
            classifi.style.color = "blue";
            classifi.style.fontSize = "210%";
        }
        else if(weight === ""  || weight<0 || isNaN(weight)){
            result.innerHTML = `please give a valid weight ${weight}`;
            classifi.innerHTML = `kutreya sala dekh ke number dial kar`;
            classifi.innerHTML = `kutreya sala dekh ke number dial kar`;
            classifi.style.backgroundColor = "yellow";
            classifi.style.color = "blue";
            classifi.style.fontSize = "210%";
        }
        else{
            const bmi = (weight * ( (height * height) / 10000)).toFixed(2);
            result.innerHTML = `<span>${bmi}</span>`;

            if(bmi < 18.6){
                classifi.innerHTML = `you are under weight`;
            }
            else if(bmi >= 18.6 && bmi<=24.9){
                classifi.innerHTML = `you lie-in Normal Range`;
            }
            else{
                classifi.innerHTML = `you are over weight`;
            }
        }

       
        
    }
)