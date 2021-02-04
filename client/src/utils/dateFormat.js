export function dateFormat(milliseconds) {

    const stringToInt = parseInt(milliseconds);

    const date = new Date(stringToInt);

    return date.toDateString();

}

export function convertToObj(milliseconds) {

    const stringToInt = parseInt(milliseconds);

    const date = new Date(stringToInt);

    return date;

}