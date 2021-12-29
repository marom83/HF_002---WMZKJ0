const isValidTAJ = (taj) => {
    let sum3 = 0, sum7 = 0;
    for(let i = 0; i < taj.length-1; i++) {
        if (i % 2 === 1) {
            sum3 += Number(taj[i]);
        } else {
            sum7 += Number(taj[i]);
        }
    }
    let sum = sum3 * 3 + sum7 * 7;
    residue = (sum % 10 == 0) ? 0 : 10 - (sum % 10);
    return Number(taj[8]) === residue;
}


const isValidAdoazon = (adoazon) => {
    let conditional1 = Number(adoazon[0]) === 8;

    let char26 = Number(adoazon.slice(1, 6));
    
    let char79 = Number(adoazon.slice(7, 9));

    let szumma = 0;
    for(let i=0; i<adoazon.length - 1; i++) {
        szumma += Number(adoazon[i])*(i+1);
    }
    let conditional2 = szumma % 11 === Number(adoazon[9]);
    
    let conditional3 = szumma % 11 !== 10;

    return conditional1 && conditional2 && conditional3;
}

