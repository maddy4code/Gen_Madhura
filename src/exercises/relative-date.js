/*
* Write a function that will take a date and compare with today date and return text:
* - Today: same year, same month, same date
* - Yesterday: same year, same month, date = today - 1
* - This week: same year, same month, today - 7 < date < today - 1
* - Last week: same year, same month, date = today - 7
* - This month: same year, same month, date < today - 7
* - Last month: same year, month = current month - 1
* - This year: same year
* - last year: year = current year - 1
* - Long time ago: everything else
*
* Lastly, please write a unit test for calculateRelativeDate function
* */

const calculateRelativeDate = (inputDate) => {
  let dateNow = new Date();
  let ipdate = new Date(inputDate);
  let currentDate = [dateNow.getFullYear(), parseInt(dateNow.getMonth()) + 1, dateNow.getDate(), dateNow.getDay()];
  let userInputDate = [inputDate.slice(0,4), inputDate.slice(5,7), inputDate.slice(8,10), ipdate.getDay()];

  if(userInputDate[0] < currentDate[0]-1){
    return "Long back";
  }
  else if(userInputDate[0] == currentDate[0]-1 || currentDate[1]-1 <0){
    return "Last year";
  }
  else if(userInputDate[1] == currentDate[1]-1 && currentDate[2]-7 > 0){
    return "Last month";
  }
  else if(userInputDate[1] == currentDate[1] && userInputDate[2] == currentDate[2]){
    return "Today";
  }
  else if(userInputDate[1] == currentDate[1] && userInputDate[2] == currentDate[2]-1)
  	return "Yesterday";
  else if(userInputDate[1] == currentDate[1] && currentDate[2]-7 < userInputDate[2]  && userInputDate[2]< currentDate[2]-1 )
  	return "This week";
  else if(userInputDate[1] == currentDate[1] &&  userInputDate[2] == currentDate[2]-7 && currentDate[3] == userInputDate[3] )
  	return "Last week";
  else if (userInputDate[1] == currentDate[1] &&  userInputDate[2] < currentDate[2]-7 && 6 > userInputDate[3])
	return "Last week"
  
  else if(userInputDate[1] == currentDate[1]){
  	return "This month";
  }
  else
  	return "This year";
};

const View = {
  init: () => {
    document.getElementById('relative-date-btn').addEventListener('click', () => {
      const msgElement = document.getElementById('relative-date-msg');
      const inputDateElem = document.getElementById('relative-date-input');
      msgElement.textContent = calculateRelativeDate(inputDateElem.value);
    });
  }
};

document.addEventListener('DOMContentLoaded', View.init);
export {calculateRelativeDate};
