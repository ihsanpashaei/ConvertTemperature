const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const kelvinInput = document.getElementById('kelvin');

celsiusInput.oninput = function () {

    let f = (parseFloat(celsiusInput.value) * 9) / 5 + 32;
    fahrenheitInput.value = parseFloat(f.toFixed(2));

    let k = (parseFloat(celsiusInput.value) + 273.15);
    kelvinInput.value = parseFloat(k.toFixed(2));
}
fahrenheitInput.oninput = function () {
    let c = ((parseFloat(
        fahrenheitInput.value) - 32) * 5) / 9;
    celsiusInput.value = parseFloat(c.toFixed(2));

    let k = (parseFloat(
        fahrenheitInput.value) - 32) * 5 / 9 + 273.15;
    kelvinInput.value = parseFloat(k.toFixed(2));
}
kelvinInput.oninput = function () {
    let f = (parseFloat(
        kelvinInput.value) - 273.15) * 9 / 5 + 32;
    fahrenheitInput.value = parseFloat(f.toFixed(2));

    let c = (parseFloat(kelvinInput.value) - 273.15);
    celsiusInput.value = parseFloat(c.toFixed(2));
}