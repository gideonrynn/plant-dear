
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

//takes in date object ex/Sat Feb 25 2023 09:21:30 GMT-0600 (Central Standard Time)
//returned yyyy-mm-dd format is the one we need for submitting to the db
//possibly modify to take in an order type and the date to parse
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

//check difference between this time and utc in minutes ex/300
//if no timezone offset, is a utc date, returns true, otherwise false
//utc means some conversions need to be done on the server when date handling
export function isUTC(date = new Date()) {
    return date.getTimezoneOffset() <= 0;
};

//checks the minutes from UTC time increment to determine if Daylight Savings Time is in effect
//for CST, if offset is 5 hours/300 min, DST is in effect, else 6 hours/360 minutes not in effect
//DST only matters if date is not UTC
export function isDST(date = new Date()) {

    //return true or false with current offset to use
    let timeSchedule = {
        dstStatus: "",
        offsetFromUTC: 0
    };

    //set the offset increment that we care about
    //get increment from date that is not during DST (january), which is higher
    let january = new Date(date.getFullYear(), 0, 1).getTimezoneOffset();
    //get increment from date is during DST (july), which is lower
    let july = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
    console.log("january, not during dst", january);
    console.log("july, during dst", july);

    timeSchedule.dstStatus = Math.min(january, july) === date.getTimezoneOffset();
    timeSchedule.offsetFromUTC = date.getTimezoneOffset()/60;
    //testing
    // return true;
    // return false;

    // console.log("DST results", dateThing);
    return timeSchedule;
}


//check for offset, which is the difference between UTC and the local time

//adjust hours per UTC, accounting for DST
//when DST is true, offset will be 300
//when DST is false, offset with be 360
//return as regular date object ex/Sat Feb 25 2023 09:21:30 GMT-0600 (Central Standard Time)
export function getLocalDate(date) {

    console.log("getLocalDate running with date with offset:", date.getTimezoneOffset());

    let passedInDate = date;
    let updatedDate = "";
    let returnedDate = "";

    //ensure that when we are local, only return the date as is
    //check the date as passed in
    //if it is not UTC, turn into UTC so you can give back the 
    //this matters because locally, this is easy to account, for, but it needs to be handled when the server evaluates to UTC

    //if it isn't UTC, local time auto accounts for DST
    if(isUTC()) {
        console.log("UTC true, will need to get localdate details with the appropriate offset and subtract it");
        console.log("This is the time", date.toString());
        //set the utc hour so it matches what we would expect if it were local instead
        updatedDate = new Date(passedInDate.setHours(passedInDate.getHours() - isDST().offset));
        console.log("Updated date", updatedDate);

    } 

    //setting UTC hours is valid if you're trying to figure out what it will look like on the server
    // if (date.getTimezoneOffset() > 0 && isDST(date)) {
    //     date.setUTCHours(date.getUTCHours() - 5);
    //     // console.log("set the utc hours", date.setUTCHours(date.getUTCHours() - 5));
    //     date.setDate(date.getDate());
    //     // console.log("give me the date", date.setDate(date.getDate()));
    //     console.log("DST true", date);
        
    // } else if (date.getTimezoneOffset() > 0 && !isDST(date)) {
    //     console.log("set to utc string, local plus 6 hours", date.toUTCString());
    //     console.log("getUTCHours", date.getUTCHours());
    //     date.setUTCHours(date.getUTCHours() - 6);
        
    //     date.setDate(date.getDate());
    //     console.log("give me the date", date.setDate(date.getDate()));
    //     console.log("DST false", date);
    // }

    // console.log("getLocalDate is now", date);

    if(updatedDate === "") {
        returnedDate = passedInDate;
    } else {
        returnedDate = updatedDate;
    }

    //return as 
    return returnedDate;

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

export function getLongDayOfTheWeek(dayAsNumber) {

    let yourDayofWeek = "";
    let color = "";

    switch (dayAsNumber) {
        case 0:
            yourDayofWeek = "Sunday";
            color = "#D565D5"; //pink
            break;
        case 1:
            yourDayofWeek = "Monday";
            color = "#AA3939"; //red
            break;
        case 2:
            yourDayofWeek = "Tuesday";
            color = "#E3963E"; //orange
            break;
        case 3:
            yourDayofWeek = "Wednesday";
            color = "#F1DB68"; //yellow
            break;
        case 4:
            yourDayofWeek = "Thursday";
            color = "#639F49"; //green
            break;
        case 5:
            yourDayofWeek = "Friday";
            color = "#49689F"; //blue
            break;
        case 6:
            yourDayofWeek = "Saturday";
            color = "#8A4E9E"; //purple
            break;
        case 7:
            yourDayofWeek = "Sunday";
            color = "#D565D5"; //pink
            break;
        default:
            yourDayofWeek = "None";
            color = "#FFFFFF"; //white
        }
        return yourDayofWeek;
}

export function getLongDayOfTheWeekAndColor(dayAsNumber) {

    let yourDayofWeek = "";
    let color = "";

    switch (dayAsNumber) {
        case 0:
            yourDayofWeek = "Sunday";
            color = "#D565D5"; //pink
            break;
        case 1:
            yourDayofWeek = "Monday";
            color = "#AA3939"; //red
            break;
        case 2:
            yourDayofWeek = "Tuesday";
            color = "#E3963E"; //orange
            break;
        case 3:
            yourDayofWeek = "Wednesday";
            color = "#F1DB68"; //yellow
            break;
        case 4:
            yourDayofWeek = "Thursday";
            color = "#639F49"; //green
            break;
        case 5:
            yourDayofWeek = "Friday";
            color = "#49689F"; //blue
            break;
        case 6:
            yourDayofWeek = "Saturday";
            color = "#8A4E9E"; //purple
            break;
        case 7:
            yourDayofWeek = "Sunday";
            color = "#D565D5"; //pink
            break;
        default:
            yourDayofWeek = "None";
            color = "#FFFFFF"; //white
        }
        return { yourDayofWeek, color };
}