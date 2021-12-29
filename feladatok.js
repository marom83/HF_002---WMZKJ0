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

function listControls(){
    
    let taj = document.forms["myForm"]["taj"].value;
    if (!isValidTAJ(taj)) {
        alert("Hibás TAJ azonosító!");
        return false;
    }

    let adoazon = document.forms["myForm"]["adoazon"].value;
    if (!isValidAdoazon(adoazon)) {
        alert("Hibás adóazonosító!");
        return false;
    }

    var controls = document.querySelectorAll("button, input, select");
    for (var c of controls) {
        c.disabled = true;
    }

    document.getElementById("tableLastName").innerHTML = document.getElementById("lastName").value;
    document.getElementById("tableFirstName").innerHTML = document.getElementById("firstName").value;
    document.getElementById("tableBirthDate").innerHTML = document.getElementById("birthDate").value;
    let maleRadio = document.getElementById("male").checked;
    document.getElementById("tableSex").innerHTML = maleRadio ? "Férfi" : "Nő";

    document.getElementById("tableTaj").innerHTML = document.getElementById("taj").value;
    document.getElementById("tableAdoazon").innerHTML = document.getElementById("adoazon").value;
    document.getElementById("tableIskolaiVegzettseg").innerHTML = document.getElementById("iskolaiVegzettseg").value;
    document.getElementById("tableOrszag").innerHTML = document.getElementById("orszag").value;
    document.getElementById("tableMegye").innerHTML = document.getElementById("megye").value;
    document.getElementById("tableVaros").innerHTML = document.getElementById("varos").value;
    document.getElementById("tableCim").innerHTML = document.getElementById("cim").value;
    document.getElementById("tableEmailInfo").innerHTML = document.getElementById("emailInfo").value;
    document.getElementById("tablePhoneNumber").innerHTML = document.getElementById("phoneNumber").value;

    document.getElementsByTagName("table")[0].style.display = null;
}
