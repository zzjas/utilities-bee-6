function parseBase10(s) {
    const parsed = parseInt(s, 10);
    return isNaN(parsed) ? 0 : parsed;
}

const ID = (s) => document.getElementById(s);
const CLASS = (s) => document.getElementsByClassName(s);