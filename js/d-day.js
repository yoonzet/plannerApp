const inputTitle = document.querySelector('.input-title');
const inputDate = document.querySelector('.date');
const dDayForm = document.querySelector('.d-day-form');
const dDayBox = document.querySelector('.d-daybox');
const addBtn = document.querySelector('.add-btn');
const cancel = document.querySelector('.cancel');


const DDAYS_KEY = 'D-Day';
const HIDDEN_CLASS = 'form-hidden'

let dDays = [];

function saveDdays(){
    localStorage.setItem(DDAYS_KEY, JSON.stringify(dDays) );
}

function dDay(){
    const leftDay = inputDate.value
    const date = new Date();

    const year = String(date.getFullYear());
    const month =String(date.getMonth()+1).padStart(2, "0");
    const day =String(date.getDate()).padStart(2, "0");
    const result = `${year}-${month}-${day}`;
    
    const diffDays = (today, otherDate)=> Math.ceil(Math.abs(today-otherDate)/ (1000 * 60 * 60 * 24));

    let diffResult = diffDays(new Date(leftDay), new Date(result));

    if(leftDay == result){
         diffResult = 'D-Day';
    }else if(leftDay < result){
        diffResult = `D+${diffResult}`; 
    }else{
        diffResult = `D-${diffResult}`
    }
    
    return diffResult
}

// https://www.codegrepper.com/code-examples/javascript/how+to+count+number+of+days+from+two+date+object+in+js

function deleteDday(event) {
    const li = event.target.parentElement;
    li.remove();
    dDays = dDays.filter(Dday => Dday.id !== parseInt(li.id));
    saveDdays();
}

function printDday(newDdayTitle){
    const li = document.createElement('li');
    li.id = newDdayTitle.id;
    const span = document.createElement('span');
    const h2 = document.createElement('h2')
    const button = document.createElement('button');

    span.innerText = newDdayTitle.title;
    h2.innerText = newDdayTitle.Dday;
    button.innerText = '×';

    li.appendChild(span);
    li.appendChild(h2);
    li.appendChild(button);

    dDayBox.appendChild(li);

    button.addEventListener('click', deleteDday);

}

function dDaySubmit(event){
    event.preventDefault();
    const newDdayTitle = inputTitle.value;
    const newDdayDate = dDay()//inputDate.value;

    const dDayObj = {
        title: newDdayTitle,
        Dday: newDdayDate,
        id: Date.now(),
    }

    inputTitle.value = ''; 
    dDays.push(dDayObj)
    printDday(dDayObj);
    saveDdays();

    dDayForm.classList.add(HIDDEN_CLASS);



}

function formHidden(){
    dDayForm.classList.toggle(HIDDEN_CLASS);
}

dDayForm.addEventListener('submit', dDaySubmit);
cancel.addEventListener('click',formHidden);
addBtn.addEventListener('click',formHidden);


const savedDdays = localStorage.getItem(DDAYS_KEY);

if (savedDdays !== null){
    const parsedDdays = JSON.parse(savedDdays);
    dDays = parsedDdays;
    parsedDdays.forEach(printDday);
}