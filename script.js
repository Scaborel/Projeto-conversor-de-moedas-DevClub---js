const convertButton = document.querySelector(".convert-button")
const selectCurrencyConverted = document.querySelector(".select-currency-converted")
const selectCurrencyConvert = document.querySelector(".select-currency-convert")

function convertValues() {
    const inputValue = document.querySelector(".input-value").value
    const currencyConvertValue = document.querySelector(".convert-value")
    const currencyConvertedValue = document.querySelector(".converted-value")

    const dolarToday = 5.07
    const euroToday = 5.46
    const libraToday = 6.37
    const realToday = 1.00

    if (selectCurrencyConvert.value == "libra") {
        currencyConvertValue.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency", currency: "GBP"
        }).format(inputValue)
    }

    if (selectCurrencyConverted.value == "dolar") {
        currencyConvertedValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "USD"
        }).format(inputValue / dolarToday)
    }
    if (selectCurrencyConverted.value == "euro") {
        currencyConvertedValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", currency: "EUR"
        }).format(inputValue / euroToday)
    }
    if (selectCurrencyConverted.value == "libra") {
        currencyConvertedValue.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency", currency: "GBP"
        }).format(inputValue / libraToday)
    }
    if (selectCurrencyConverted.value == "real") {
        currencyConvertedValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency", currency: "BRL"
        }).format(inputValue / libraToday)
    }
}

function changeCurrency() {
    const currencyConvertedName = document.getElementById("converted-name")
    const currencyConvertName = document.getElementById("convert-name")
    const currencyImageConverted = document.querySelector(".image-converted")
    const currencyImageConvert = document.querySelector(".image-convert")

    if (selectCurrencyConvert.value == "dolar") {
        currencyConvertName.innerHTML = "Dolar"
        currencyImageConvert.src = "./assets/dolar.png" 
    }
    if (selectCurrencyConvert.value == "euro") {
        currencyConvertName.innerHTML = "Euro"
        currencyImageConvert.src = "./assets/euro.png" 
    }
    if (selectCurrencyConvert.value == "libra") {
        currencyConvertName.innerHTML = "Libra"
        currencyImageConvert.src = "./assets/libra.png" 
    }
    if (selectCurrencyConvert.value == "real") {
        currencyConvertName.innerHTML = "Real"
        currencyImageConvert.src = "./assets/real.png" 
    }

    if (selectCurrencyConverted.value == "dolar") {
        currencyConvertedName.innerHTML = "Dolar"
        currencyImageConverted.src = "./assets/dolar.png"
    }
    if (selectCurrencyConverted.value == "euro") {
        currencyConvertedName.innerHTML = "Euro"
        currencyImageConverted.src = "./assets/euro.png"
    }
    if (selectCurrencyConverted.value == "libra") {
        currencyConvertedName.innerHTML = "libra"
        currencyImageConverted.src = "./assets/libra.png"
    }
    if (selectCurrencyConverted.value == "real") {
        currencyConvertedName.innerHTML = "Real"
        currencyImageConverted.src = "./assets/real.png"
    }


    convertValues()
}

selectCurrencyConverted.addEventListener("change", changeCurrency)





