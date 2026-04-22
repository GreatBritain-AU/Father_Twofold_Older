'use strict';

/**
 * Обчислює кількість років, через які (або скільки років тому)
 * батько буде (або був) удвічі старший за сина.
 *
 * @param {number} ageFather - Вік батька
 * @param {number} ageSon - Вік сина
 * @returns {number} Кількість років
 */

function fatherOlder(ageFather, ageSon) {
    if (ageFather < 0 || ageSon < 0 || (ageFather - ageSon) < 15) {
        return NaN;
    }
    return 2 * ageSon - ageFather;
}

const ageFather = 61;
const ageSon = 30;

const years = fatherOlder(ageFather, ageSon);
const yearsAbs = Math.abs(years);

let yearsStr;

if (yearsAbs % 100 >= 11 && yearsAbs % 100 <= 14) {
    yearsStr = 'років';
} else {
    switch (yearsAbs % 10) {
        case 1:
            yearsStr = 'рік';
            break;
        case 2:
        case 3:
        case 4:
            yearsStr = 'роки';
            break;
        default:
            yearsStr = 'років';
    }
}

if (Number.isNaN(years)) {
    console.log(NaN);
} else if (years > 0) {
    console.log(`Батько буде удвічі старший за сина через ${years} ${yearsStr}`);
} else if (years < 0) {
    console.log(`Батько був удвічі старший за сина ${yearsAbs} ${yearsStr} тому`);
} else {
    console.log('Батько вже удвічі старший за сина');
}