


function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();


function days() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysUL = document.getElementById('days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    const daysLi = document.createElement('li');
    
    if (dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31) {
      daysLi.className = 'day holiday';
    } else {
      daysLi.className = 'day';
    }
    daysLi.innerText = dezDaysList[index];
    daysUL.appendChild(daysLi);
    
    if (dezDaysList[index] === 25) {
      daysLi.className = 'day holiday friday';
    } else if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18) {
      daysLi.className = 'day friday';
    }
    
  }
}
days();

function holidayBtn(feriados) {
  let btnContainer = document.querySelector('.buttons-container');
  let buttonHoliday = document.createElement('button');
  buttonHoliday.id = 'btn-holiday';
  buttonHoliday.innerText = feriados;
  btnContainer.appendChild(buttonHoliday);
}
holidayBtn('Feriados');

function btnHolidayColor () {
  let holidayDays = document.querySelectorAll('.holiday');
  
  for (let index = 0; index < holidayDays.length; index += 1) {

    if (holidayDays[index].style.backgroundColor === '') {
      holidayDays[index].style.backgroundColor = '#E3DBDB';

    } else {
      holidayDays[index].style.backgroundColor = '';
    }

    console.log(holidayDays[index]);
  }  
}

let btnHoliday = document.getElementById('btn-holiday');

btnHoliday.addEventListener('click', btnHolidayColor);
//btnHoliday.removeEventListener('click', btnHolidayColor);

function fridayBtn (friday) {
  let btnFriday = document.createElement('button');
  let containerBtn = document.querySelector('.buttons-container')
  
  btnFriday.id = 'btn-friday';
  btnFriday.innerText = friday;
  containerBtn.appendChild(btnFriday);
}

fridayBtn('Sexta-Feira!');

const fridayButton = document.getElementById('btn-friday');

fridayButton.addEventListener('click', function() {

  let friday = document.querySelectorAll('.friday');
  let fridayDays = [4, 11, 18, 25]

  for (let index = 0; index < friday.length; index += 1) {

    if (friday[index].innerText == fridayDays[index]) {
      friday[index].innerText = 'Sexta-Feira!';
    } else if (friday[index].innerText = 'Sexta-Feira!') {
      friday[index].innerText = fridayDays[index];
    }
  }

})