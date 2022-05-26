import { timePrettifier } from "../../../helperFuncs/regexFuncs";

const scrollToNow = (string) => {
    const hourlyDiv = document.getElementById('forecastWeatherHourly');
    const hours = Array.from(hourlyDiv.childNodes);
    const time = timePrettifier(string);
    const index = hours.indexOf(document.getElementById(time));
    let scrollPos;
    if(index !== 0) scrollPos = hours[index].offsetLeft - hourlyDiv.offsetLeft ;
    hourlyDiv.scrollTo({
        top: 0,
        left: scrollPos,
        behavior: "smooth"
    });
};

export default scrollToNow;