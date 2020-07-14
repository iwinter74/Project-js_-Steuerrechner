function myReset() {
    console.log("test")
    document.getElementById("zvE").value = ""

}
function myTax() {
    console.log("test")
    let zvE = document.getElementById("zvE").value
    zvE = Number(zvE)
    console.log(zvE)
    let person = 1
    let status = document.getElementById("verheiratet")
    if (status.checked == true) {
        zvE = zvE / 2
        person = 2
    }
    console.log(zvE)
    let year = document.getElementById("year").value
    console.log(year)
    let ESt
    if (document.getElementById("zvE").value == "") {
        document.getElementById("error").innerHTML = "Einkommen bitte eingeben"
    } else if ((year == "2020") && (zvE < 9408)) {
        ESt = 0
        document.getElementById("tax").innerHTML = ESt + " €"
        console.log(ESt)
    } else if ((year == "2020") && (zvE >= 9409) && (zvE <= 14352)) {
        let y = (zvE - 9408) / 10000
        ESt = (972.87 * y + 1400) * y
        console.log(ESt.toFixed(0))
        document.getElementById("tax").innerHTML = ESt.toFixed(0)*person + " €"
    }
    else if ((year == "2020") && (zvE >= 14533) && (zvE <= 57051)) {
        let z = (zvE - 14532) / 10000
        ESt = (212.02 * z + 2397) * z + 972.79
        console.log(ESt.toFixed(0))
        document.getElementById("tax").innerHTML = ESt.toFixed(0)*person + " €"
    }
    else if ((year == "2020") && (zvE >= 57052) && (zvE <= 270500)) {
        ESt = 0.42 * zvE - 8963.74
        console.log(ESt.toFixed(0))
        document.getElementById("tax").innerHTML = ESt.toFixed(0)*person + " €"
    }
    else if ((year == "2020") && (zvE >= 270501)) {
        ESt = 0.45 * zvE - 17078.74
        console.log(ESt.toFixed(0))
        document.getElementById("tax").innerHTML = ESt.toFixed(0)*person + " €"
    }
    else if ((year == "2019") && (zvE < 9168)) {
        ESt = 0
        document.getElementById("tax").innerHTML = ESt + " €"
        console.log(ESt)
    }
    else if ((year == "2019") && (zvE >= 9169) && (zvE <= 14254)) {
        let y = (zvE - 9168) / 10000
        ESt = (980.14 * y + 1400) * y
        console.log(ESt.toFixed(0))
        document.getElementById("tax").innerHTML = ESt.toFixed(0)*person + " €"
    }
    else if ((year == "2019") && (zvE >= 14255) && (zvE <= 55960)) {
        let z = (zvE - 14254) / 10000
        ESt = (216.16 * z + 2397) * z + 965.58
        console.log(ESt.toFixed(0))
        document.getElementById("tax").innerHTML = ESt.toFixed(0)*person + " €"
    }
    else if ((year == "2019") && (zvE >= 55961) && (zvE <= 265326)) {
        ESt = 0.42 * zvE - 8780.9
        console.log(ESt.toFixed(0))
        document.getElementById("tax").innerHTML = ESt.toFixed(0)*person + " €"
    }
    else if ((year == "2019") && (zvE >= 265327)) {
        ESt = 0.45 * zvE - 16740.68
        console.log(ESt.toFixed(0))
        document.getElementById("tax").innerHTML = ESt.toFixed(0)*person + " €"
    }
    else if ((year == "2018") && (zvE < 9000)) {
        ESt = 0
        document.getElementById("tax").innerHTML = ESt + " €"
        console.log(ESt)
    }
    else if ((year == "2018") && (zvE >= 9001) && (zvE <= 13996)) {
        let y = (zvE - 9000) / 10000
        ESt = (997.8 * y + 1400) * y
        console.log(ESt.toFixed(0))
        document.getElementById("tax").innerHTML = ESt.toFixed(0)*person + " €"
    }
    else if ((year == "2018") && (zvE >= 13997) && (zvE <= 54949)) {
        let z = (zvE - 13996) / 10000
        ESt = (220.13 * z + 2397) * z + 948.49
        console.log(ESt.toFixed(0))
        document.getElementById("tax").innerHTML = ESt.toFixed(0)*person + " €"
    }
    else if ((year == "2018") && (zvE >= 54950) && (zvE <= 260532)) {
        ESt = 0.42 * zvE - 8621.75
        console.log(ESt.toFixed(0))
        document.getElementById("tax").innerHTML = ESt.toFixed(0)*person + " €"
    }
    else if ((year == "2018") && (zvE >= 260533)) {
        ESt = 0.45 * zvE - 16437.7
        console.log(ESt.toFixed(0))
        document.getElementById("tax").innerHTML = ESt.toFixed(0)*person + " €"
    }
}