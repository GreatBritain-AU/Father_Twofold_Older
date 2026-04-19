'use strict'

function fatherOlder(ageFather, ageSon){
    if(ageSon < 0 || ageFather - ageSon <= 15){
        return NaN;
    }
}

const ageFather = 59;
const ageSon = 'ewgewgwegwre';
const years = 2 * ageSon - ageFather;
const yearsAbs = Math.abs(years);

let yearsStr;

if(yearsAbs >= 10 && yearsAbs <= 20 || yearsAbs > 21 && yearsAbs <= 30){
    yearsStr = 'років';
} else {
    switch (String(years).slice(-1)){
        case '1':
            yearsStr = 'рік';
            break;
        case '2':
        case '3':
        case '4':
            yearsStr = 'роки';
            break;
        default:
            yearsStr = 'років';
    }
}

switch(true){
    case (Number.isNaN(years)): console.log(NaN);
        break;
    case (years > 0): console.log(`Батько буде вдвічі старший за сина через ${years} ${yearsStr}`);
        break;
    case (years < 0): console.log(`Батько був вдвічі старший за сина ${yearsAbs} ${yearsStr} тому`);
        break;
    default: console.log('Батько вже вдвічі старший за сина');
}