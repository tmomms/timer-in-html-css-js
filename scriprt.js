const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const text = document.querySelector(".text");
const button = document.querySelector(".button");
const audio = document.querySelector(".audio");
const body = document.getElementsByTagName(".body")
console.log(body);



second.innerHTML = 0;
minute.innerHTML = 0;
hour.innerHTML = 0;


let intervalID = setInterval(secondTime, 10);

let time = +prompt("введие значение")

function secondTime() {
    second.innerHTML ++;
    if (second.innerHTML == 10) {
        minute.innerHTML ++;
        second.innerHTML = 0;
        if (minute.innerHTML == 10) {
            hour.innerHTML ++;
            minute.innerHTML = 0;
            if (hour.innerHTML == time) {
                clearInterval(intervalID)
                body.classList.toggle("body-hell")
            }
        }
    }
}

text.innerHTML = `секундомер работает до ${time} времени`;

button.addEventListener("click", restart);

function restart() {
    location.reload(); 
}


