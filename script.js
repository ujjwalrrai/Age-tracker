const isDOBOpen = false;
let dateOfBirth;
const settingIcon = document.getElementById("icon");
const  settingCon = document.getElementById("setcon");
const initalText = document.getElementById("initial");
const afterText = document.getElementById("after");
const dobButton = document.getElementById("dobbtn");
const dobInput = document.getElementById("dobinput");

const year1 =document.getElementById("year");
const month1 =document.getElementById("month");
const day1 =document.getElementById("day");
const hour1 =document.getElementById("hour");
const minute1 =document.getElementById("minute");
const second1 =document.getElementById("second");

const makeTwoDigitNumber = (number)=> {
    return number > 9 ? number: `0${number}`
};


const toggleDateOfBirthSelector = () => {
    if(isDOBOpen) {
        settingCon.classList.add("hide");
    }else {
      settingCon.classList.remove("hide");

    }
    isDOBOpen != isDOBOpen;
    console.log("Toggle" , isDOBOpen);
};

const updateAge = () =>
{
 const currentDate =new Date();
 const dateDiff = currentDate - dateOfBirth;
 const year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
 const month = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365) % 12);
 const day = Math.floor(dateDiff / (1000 * 60 * 60 * 24) % 30);
 const hour = Math.floor(dateDiff / (1000 * 60 * 60) % 24);
 const minute = Math.floor(dateDiff / (1000 * 60) % 60);
 const second = Math.floor(dateDiff / (1000) % 12);
 console.log({ year, month, day , hour , minute, second});

 year1.innerHTML = makeTwoDigitNumber(year);
 month1.innerHTML =makeTwoDigitNumber(month);
 day1.innerHTML =  makeTwoDigitNumber(day);
 hour1.innerHTML = makeTwoDigitNumber(hour);
 minute1.innerHTML = makeTwoDigitNumber(minute);
 second1.innerHTML = makeTwoDigitNumber(second);
};

const setDOBHandler = () => {
const dateString = dobInput.value;

dateOfBirth =  dateString ? new Date(dateString) : null

if(dateOfBirth) {
    initalText.classList.add("hide");
    afterText.classList.remove("hide");
    updateAge();
    setInterval(() => updateAge(), 1000);
} else {
    afterText.classList.add("hide");
    initalText.classList.remove("hide");
}
};
setDOBHandler();
// console.log("date of birth" , dateOfBirth);




settingIcon.addEventListener("click",   toggleDateOfBirthSelector);
dobButton.addEventListener("click", setDOBHandler);
