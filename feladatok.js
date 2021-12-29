// 1. feladat

/*A TAJ szám egy kilenc számjegyből álló szám, amelyben az első nyolc számjegy egy folyamatosan kiadott egyszerű sorszám,
amely mindig az előző, utoljára kiadott sorszámból egy hozzáadásával keletkezik.
A kilencedik számjegy ellenőrző ún. CDV kód, melynek képzési algoritmusa az alábbi:
A TAJ szám első nyolc számjegyéből a páratlan helyen állókat hárommal, a páros helyen állókat héttel szorozzuk,
és a szorzatokat összeadjuk. Az összeget tízzel elosztva a maradékot tekintjük a kilencedik, azaz CDV kódnak.*/

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

/*születés óta eltelt napok száma + ellenőrző összeg*/
/*
const isvalidAdoazon = (adoazon) => {
    let conditional1 = Number(adoazon[0]) === 8;

    let conditional2 =
    return conditional1 && conditional2 && conditional3;
}
*/
