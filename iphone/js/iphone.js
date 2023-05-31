let lock = document.querySelector(".lock");
let layer = document.querySelector(".layer");
let head = document.querySelector(".head");
let caller = document.querySelector(".caller");
let btns = document.querySelector(".btns");
let footer = document.querySelector("footer");
let icons = document.querySelectorAll("nav ul li i");
const months = ["Jan", "Feb", "Mar", "Apr", 
                "May", "Jun", "Jul","Aug", 
                "Sep", "Oct", "Nov", "Dec"];
                
const days = ["Sund ay", "Monday", "Tuesday", "Wednesday", 
                "Thursday", "Friday", "Saturday"];
let clock = document.querySelector(".clock");
let timeText = document.createElement("span");
let monthText = document.createElement("span");
let lockIcon = document.querySelector(".clock i");

function time(){
    timeText.style.fontSize = "13px";
    clock.style.left = "5px";
    clock.style.top = "0px";
}
function getTime(){
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let month = date.getMonth();
    if(hour == 0)hour = 12;
    if(hour > 12)hour = hour - 12;
    hour = (hour < 10) ? "0" + hour : hour;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    timeText.innerHTML = `${hour}:${minutes}`;
    monthText.innerHTML = `${days[date.getDay()]}, ${date.getDate()} ${months[month]}`;
    clock.appendChild(timeText)
    clock.appendChild(monthText)
    setTimeout(getTime,1000)
}
getTime()

let click = 0

lock.addEventListener("click",() => {
    if(click === 0){
        caller.style.display = "none"
        btns.style.display = "none"
        layer.style.backgroundColor = "black";
        head.style.zIndex = 5;
        clock.style.opacity = "0";
        footer.style.backgroundColor = "black"
        for(let i = 0; i < icons.length; i++){
            icons[i].style.color = "black"  
        }
        click += 1;
    }
    else {
        for(let i = 0; i < icons.length; i++)
            icons[i].style.color = "white";
        clock.style.opacity = "1";
        footer.style.backgroundColor = "#eee";
        layer.style.backgroundColor = "#33333300";
        lockIcon.style.opacity = "1";
        clock.style.display = "flex";
        clock.style.flexDirection = "column";
        clock.style.alignItems = "center";
        clock.style.left = "50%";
        clock.style.top = "25%";
        clock.style.transform = "translate(-50%,-75%)";
        clock.lastChild.style.opacity = "1";
        timeText.style.fontSize = "34px"
        click = 0;
    }
})
