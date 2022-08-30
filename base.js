function parseBase(s, base) {
    return parseInt(s, base) || 0;
}

function parseBase10(s) {
    return parseBase(s, 10);
}

function safeParseFloat(s) {
    return parseFloat(s) || 0;
}

const ID = (s) => document.getElementById(s);
const CLASS = (s) => document.getElementsByClassName(s);
const TAG = (s) => document.getElementsByTagName(s);