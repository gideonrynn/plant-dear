
//string representation of the current date and time. Ex/Fri May 27 2022 00:00:00 GMT-0500 (Central Daylight Time)
//get date accounting for UTC and offset if it exists
let date = getLocalDate(new Date());

//one day in milliseconds
let oneDay = 1000 * 60 * 60 * 24;

//split the given date into day, month, and year, and output as new date object in string representation of the current date and time
//Ex/Fri May 27 2022 00:00:00 GMT-0500 (Central Daylight Time)
export function parseWaterDate(dateToParse) {

    let newWaterDate = ""

    if (dateToParse) {
        let dateToParseYear = dateToParse.split("-")[0];
        let dateToParseMonth = dateToParse.split("-")[1] - 1;
        let dateToParseDay = dateToParse.split("-")[2];
        // console.log(dateToParseYear, dateToParseMonth, dateToParseDay);

        newWaterDate = new Date(dateToParseYear, dateToParseMonth, dateToParseDay);
        // console.log("New water date formatted: ", newWaterDate);
    }

    return newWaterDate;

}

export function parseToYYYYMMDD(dateToParse) {

    let newDate = "";

    if (dateToParse) {

        let dateToParseYear = dateToParse.getFullYear();
        let dateToParseMonth = dateToParse.getMonth() + 1;
        let dateToParseDay = dateToParse.getDate();

        newDate = dateToParseYear + "-" + dateToParseMonth.toString().padStart(2, '0') + "-" + dateToParseDay.toString().padStart(2, '0');

    }

    return newDate;
}

//get number of milliseconds since epoch (getTime) to compare days in the same format, and determine difference in days
//default comparison date to current day considering UTC, but can pass in other dates
export function getDifferenceInDays(waterDate, comparisonDate = date) {

    let differenceInDays = "";

    if(comparisonDate && waterDate) {
        // console.log(comparisonDate);
        let dateDifference = comparisonDate.getTime() - parseWaterDate(waterDate).getTime();
        differenceInDays = Math.floor(dateDifference / oneDay);
        // console.log("differenceInDays is: ", differenceInDays);

    }

    return differenceInDays;

}

//checks the offset from UTC (ex/ 300min/5hrs 360min/6hrs) to determine if Daylight Savings Time is in effect, returns true or false
//UTC is typically 5 or 6 hours ahead of CST depending on DST
export function isDST(date = new Date()) {
    let january = new Date(date.getFullYear(), 0, 1).getTimezoneOffset();
    let july = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();

    return Math.max(january, july) !== date.getTimezoneOffset();
}

//check for offset. if there is none, is in local environment, return as is. adjust hours per UTC, accounting for DST
export function getLocalDate(date) {

    if (date.getTimezoneOffset > 0 && isDST(date)) {
        date.setUTCHours(date.getUTCHours() - 5);
        date.setDate(date.getDate());
        
    } else if (date.getTimezoneOffset > 0 && !isDST(date)) {
        date.setUTCHours(date.getUTCHours() - 6);
        date.setDate(date.getDate());
    }

    return date;

} 


export function getLongDayOfTheWeek(dayAsNumber) {

    let yourDayofWeek = "";

    switch (dayAsNumber) {
        case 0:
            yourDayofWeek = "Sunday";
            break;
        case 1:
            yourDayofWeek = "Monday";
            break;
        case 2:
            yourDayofWeek = "Tuesday";
            break;
        case 3:
            yourDayofWeek = "Wednesday";
            break;
        case 4:
            yourDayofWeek = "Thursday";
            break;
        case 5:
            yourDayofWeek = "Friday";
            break;
        case 6:
            yourDayofWeek = "Saturday";
            break;
        case 7:
            yourDayofWeek = "Sunday";
            break;
        default:
            yourDayofWeek = "None";
        }
        return yourDayofWeek;
}


export function getNumberDayOfWeek(dayAsLongString) {

    let yourDayofWeek = "";

    switch (dayAsLongString) {
        case "Sunday":
            yourDayofWeek = 0;
            break;
        case "Monday":
            yourDayofWeek = 1;
            break;
        case "Tuesday":
            yourDayofWeek = 2;
            break;
        case "Wednesday":
            yourDayofWeek = 3;
            break;
        case "Thursday":
            yourDayofWeek = 4;
            break;
        case "Friday":
            yourDayofWeek = 5;
            break;
        case "Saturday":
            yourDayofWeek = 6;
            break;
        default:
            yourDayofWeek = null;
        }
        return yourDayofWeek;
}