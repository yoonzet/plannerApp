const clock = document.querySelector('.clock p');

const today = document.querySelector('.clock h1')

const week =['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

function getToday(){
    const date = new Date();
    const year = String(date.getFullYear());
    const month =String(date.getMonth()+1);
    const dayNum =String(date.getDate()).padStart(2, "0");
    const day = week[date.getDay()];
    today.innerText = (`${year}. ${month}. ${dayNum}. ( ${day} ) `);
}


function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    clock.innerText=(`${hours} : ${minutes}`)
}

getToday();
setInterval(getClock, 1000);
