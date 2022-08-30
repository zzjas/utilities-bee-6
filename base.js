function parseBase(s, base) {
    const parsed = parseInt(s, base);
    return parsed;
    // return isNaN(parsed) ? 0 : parsed;
}

function parseBase10(s) {
    return parseBase(s, 10);
}

function safeParseFloat(s) {
    return parseFloat(s) | 0;
}

const ID = (s) => document.getElementById(s);
const CLASS = (s) => document.getElementsByClassName(s);
const TAG = (s) => document.getElementsByTagName(s);