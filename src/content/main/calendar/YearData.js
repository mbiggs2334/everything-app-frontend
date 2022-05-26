class CalendarData {
    constructor(year){
        this.leapYear = CalendarData.isLeapYear(year)
        this.yearData = {
            0: {
                days: 31,
                key: this.leapYear? 0 : 1,
                string: "January"
            },
            1: {
                days: this.leapYear ? 29: 28,
                key: this.leapYear? 3 : 4,
                string: "Februrary"
            },
            2: {
                days: 31,
                key: 4,
                string: "March"
            },
            3: {
                days: 30,
                key: 0,
                string: "April"
            },
            4: {
                days: 31,
                key: 2,
                string: "May"
            },
            5: {
                days: 30,
                key: 5,
                string: "June"
            },
            6: {
                days: 31,
                key: 0,
                string: "July"
            },
            7: {
                days: 31,
                key: 3,
                string: "August"
            },
            8: {
                days: 30,
                key: 6,
                string: "September"
            },
            9: {
                days: 31,
                key: 1,
                string: "October"
            },
            10: {
                days: 30,
                key: 4,
                string: "November"
            },
            11: {
                days: 31,
                key: 6,
                string: "December"
            }
    }
}
    static daysOfWeek = {
        0: "Saturday",
        1: "Sunday",
        2: "Monday",
        3: "Tuesday",
        4: "Wednesday",
        5: "Thursday",
        6: "Friday"
    }

    static isLeapYear(year){
        if(year % 4 !== 0) return false;
        if(year % 100 !== 0) return true;
        if(year % 400 === 0) return true;
        return false;
    }

    getDayOfWeek(month, day, year){
        if(year < 1753) throw new Error("Please select a year greater than 1753");
        let yearCorrection = 1;
        if(year < 1900 && year > 1800) yearCorrection = 2;
        if(year < 1800 && year > 1753) yearCorrection = 4;
        let lastTwoDigitsOfYear = parseInt(year.toString().slice(2));
        let dayOfWeek = ((lastTwoDigitsOfYear + (Math.floor(lastTwoDigitsOfYear * 0.25)) + (day) + this.yearData[month].key) - yearCorrection)% 7;
        return CalendarData.daysOfWeek[dayOfWeek];
    }
}

export default CalendarData;