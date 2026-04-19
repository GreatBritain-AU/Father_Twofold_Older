'use strict'

const ageFather = 50;
const ageSon = 27;
const years = function(ageFather, ageSon){};
const yearsAbs = Math.abs(years);

let yearsStr;

if(yearsAbs >= 10 && yearsAbs <= 20 || yearsAbs > 21 && yearsAbs <= 30){
    yearsStr = 'років';
}

function fatherOlder(ageFather, ageSon){
    if(ageSon < 0 || ageFather - ageSon <= 15){
        return 0;
    }
    return 2 * ageSon - ageFather;
}