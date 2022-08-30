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
const CLASS = (s) => Array.from(document.getElementsByClassName(s));
const TAG = (s) => Array.from(document.getElementsByTagName(s));