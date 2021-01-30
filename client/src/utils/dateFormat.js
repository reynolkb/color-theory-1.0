export function dateFormat(milliseconds) {

    const stringToInt = parseInt(milliseconds);
    console.log("number of milliseconds: " + stringToInt);
    console.log(typeof stringToInt);

    const date = new Date(stringToInt);
    console.log(date);

    return date.toDateString();

}