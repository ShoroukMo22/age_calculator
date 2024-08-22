
const inputElements = document.querySelectorAll(".card__input");
const supmitButton = document.querySelector(".card__button");

const validateDay = (day) =>{
  if(day && day >0 && day<=31){
    return true;
  }
};



const validateMonth = (month) =>{
  if(month && month >0 && month<=12){
    return true;
  }
};





const validateYear = (year) =>{
  const currentYear = new Date().getFullYear();

  if(year && year >0 && year<=currentYear){
    return true;
  }
};





const isDateValid = (dayElement, monthElement, yearElement) => {
    let isValid = [false, false, false];
  
    if (!validateDay(dayElement.value)) {
      dayElement.classList.add("card__input--error");
    } else {
      isValid[0] = true;
      dayElement.classList.remove("card__input--error");
    }
  
    if (!validateMonth(monthElement.value)) {
      monthElement.classList.add("card__input--error");
    } else {
      isValid[1] = true;
      monthElement.classList.remove("card__input--error");
    }
  
    if (!validateYear(yearElement.value)) {
      yearElement.classList.add("card__input--error");
    } else {
      isValid[2] = true;
      yearElement.classList.remove("card__input--error");
    }
  
    return isValid.every((item) => item === true);
  };
  




const calculateAge = (year, month, day) => {
  const today = new Date();
  const birthdate = new Date(year, month-1, day); //month here start from 0 not 1, so we subtract
  // بنطرح الشهر من واحد لان الشهر في الدالة ديه من 0 لحد  11 مش من 1 ل 12
 
 const age = today.getFullYear() - birthdate.getFullYear();
  const monthDiff = today.getMonth() - birthdate.getMonth();
// هنا بخليه يحط في اعتباره اليوم والشهر وهو بيحسب العمر مش السنة بس

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
    age--;
  }

  return age;
};


const onClickHandler = () => {

  const dayElement = document.querySelector('.card__input[name="day"]');
  const monthElement = document.querySelector('.card__input[name="month"]');
  const yearElement = document.querySelector('.card__input[name="year"]');
  const resultElement = document.querySelector(".card__resultValue");

  if (!isDateValid(dayElement, monthElement, yearElement)) {
        resultElement.textContent = "--";
        return;
      }
    
  resultElement.textContent = calculateAge(yearElement.value, monthElement.value, dayElement.value)

  console.log("you clicked me!");

}

supmitButton.addEventListener("click",onClickHandler)

inputElements.forEach(item => {
  item.addEventListener("keydoen", event => {
    console.log(event.key)
    event.key === "Enter" && onClickHandler();
  })
})





















// const inputElements = document.querySelectorAll(".card__input");
// const submitButton = document.querySelector(".card__button");

// const calculateAge = (year, month, day ) => {
//   const today = new Date();
//   const birthDate = new Date(year, month-1, day);
//   //بنطرح الشهر من واحد لان الشهر في الدالة ديه من 0 لحد  11 مش من 1 ل 12

// const age = today.getFullYear() - birthDate.getFullYear()

// const monthDiff = today.getMonth() - birthDate.getMonth()
// //هنا بخليه يحط في اعتباره اليوم والشهر وهو بيحسب العمر مش السنة بس
// if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
//       age--;
//     }
  
// return age;

// }



// const onClickHandler = () => {


//   const dayElement = document.querySelector('.card__input[name="day"]');
//   const monthElement = document.querySelector('.card__input[name="month"]');
//   const yearElement = document.querySelector('.card__input[name="year"]');
//   const resultElement = document.querySelector(".card__resultValue");

//   resultElement.textContent = calculateAge(yearElement.value, monthElement.value, dayElement.value)


//   console.log("helllo");
// }


// inputElements.forEach(item => {
//   item.addEventListener("keydoen", event => {
//     console.log(event.key);
//     event.key === "Enter" && onClickHandler();
//   })
// })



// submitButton.addEventListener("click",onClickHandler)
