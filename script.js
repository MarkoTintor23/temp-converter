const celsius = document.querySelector("#celsius");
const fahren = document.querySelector("#fahrenheit");
const kelvin = document.querySelector("#kelvin");

const celsiusToFahren = function (cel) {
  return (cel * 9) / 5 + 32;
};

const celsiusToKelvin = function (cel) {
  return cel + 273.15;
};
const farenToCelsius = function (far) {
  return ((far - 32) * 5) / 9;
};
const fahrenToKelvin = function (far) {
  return ((far - 32) * 5) / 9 + 273.15;
};
const kelvinToCelsius = function (kel) {
  return kel - 273.15;
};
const kelvinToFahren = function (kel) {
  return ((kel - 273.15) * 5) / 9 + 32;
};

celsius.addEventListener("input", function () {
  if (celsius.value === "") {
    fahren.value = "";
    kelvin.value = "";
    return;
  }
  const celsiusValue = parseFloat(celsius.value);
  if (!isNaN(celsius.value)) {
    fahren.value = celsiusToFahren(celsiusValue).toFixed(2);
    kelvin.value = celsiusToKelvin(celsiusValue).toFixed(2);
  } else {
    fahren.value = "";
    kelvin.value = "";
  }
});
fahren.addEventListener("input", function () {
  if (fahren.value === "") {
    celsius.value = "";
    kelvin.value = "";
    return;
  }
  const fahrenValue = parseFloat(fahren.value);
  if (!isNaN(fahren.value)) {
    celsius.value = farenToCelsius(fahrenValue).toFixed(2);
    kelvin.value = fahrenToKelvin(fahrenValue).toFixed(2);
  } else {
    celsius.value = "";
    kelvin.value = "";
  }
});
kelvin.addEventListener("input", function () {
  if (kelvin.value === "") {
    celsius.value = "";
    fahren.value = "";
    return;
  }
  const kelvinValue = parseFloat(kelvin.value);
  if (!isNaN(kelvin.value)) {
    celsius.value = kelvinToCelsius(kelvinValue).toFixed(2);
    fahren.value = kelvinToFahren(kelvinValue).toFixed(2);
  } else {
    celsius.value = "";
    fehren.value = "";
  }
});
