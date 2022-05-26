const removeYearFromDate = (dateString) => {
    const regex = /\-*[0-9][0-9][0-9][0-9]\-*/;
    return dateString.trim().replace(regex, '');
};

const timePrettifier = (string) => {
    let time = parseInt(string.trim().match(/([0-9]*[0-9]):([0-9][0-9])/).slice(0,2));
    if(time >= 12){
        if(time === 12){
            time = time + 'pm';
        } else{
            time = (time - 12) + 'pm';
        }
    } else {
        if(time=== 0) time = 12;
        time = time + 'am';
    };
    return time;
};

const timePrettifierWithMinutes = (string) => {
    
    let hour = parseInt(string.trim().match(/[0-9][0-9]:[0-9][0-9]/g));
    let minutes = string.trim().match(/:[0-9][0-9]/g);
    
    if(hour >= 12){
        if(hour === 12){
            hour = hour + minutes[0] + 'pm';
        } else{
            hour = (hour - 12) + minutes[0] + 'pm';
        }
    } else {
        if(hour=== 0) hour = 12;
        hour = hour + minutes[0] + 'am';
    };

    return hour;
};



const getTime = string => {
    const regex = /[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9] /;
    return string.replace(regex, '');
};

export {
    removeYearFromDate,
    timePrettifier,
    timePrettifierWithMinutes
};