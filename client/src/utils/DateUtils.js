
//string representation of the current date and time. Ex/Fri May 27 2022 00:00:00 GMT-0500 (Central Daylight Time)
//get date accounting for UTC and offset if it exists
let date = getLocalDate(new Date());

//one day in milliseconds
let oneDay = 1000 * 60 * 60 * 24;

//split the given date into day, month, and year, and output as new date object in string representation of the current date and time
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

//get number of milliseconds since epoch (getTime) to compare days in the same format, and determine difference in days
//default comparison date to current day considering UTC, but can pass in other dates
export function getDifference(waterDate, comparisonDate = date) {

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


export function getDayOfTheWeek(dayAsNumber) {

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
        default:
            yourDayofWeek = "None";
        }
        return yourDayofWeek;
}