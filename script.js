document.addEventListener("DOMContentLoaded", () => {
  new TempConverter(); // Inicijalizacija klase nakon što se učita DOM
});
class TempConverter {
  constructor() {
    this.celsius = document.querySelector("#celsius");
    this.fahren = document.querySelector("#fahrenheit");
    this.kelvin = document.querySelector("#kelvin");

    this.addEventListeners();
  }

  addEventListeners() {
    this.celsius.addEventListener("input", (e) => this.handleInput(e));
    this.fahren.addEventListener("input", (e) => this.handleInput(e));
    this.kelvin.addEventListener("input", (e) => this.handleInput(e));
  }

  handleInput(e) {
    const value = parseFloat(e.target.value);

    if (isNaN(value)) {
      this.clearFields();
      return;
    }

    if (e.target === this.celsius) {
      this.fahren.value = this.celsiusToFahren(value).toFixed(2);
      this.kelvin.value = this.celsiusToKelvin(value).toFixed(2);
    } else if (e.target === this.fahren) {
      this.celsius.value = this.fahrenToCelsius(value).toFixed(2);
      this.kelvin.value = this.fahrenToKelvin(value).toFixed(2);
    } else if (e.target === this.kelvin) {
      this.celsius.value = this.kelvinToCelsius(value).toFixed(2);
      this.fahren.value = this.kelvinToFahren(value).toFixed(2);
    }
  }
  celsiusToFahren(cel) {
    return (cel * 9) / 5 + 32;
  }

  celsiusToKelvin(cel) {
    return cel + 273.15;
  }
  fahrenToCelsius(far) {
    return ((far - 32) * 5) / 9;
  }
  fahrenToKelvin(far) {
    return ((far - 32) * 5) / 9 + 273.15;
  }
  kelvinToCelsius(kel) {
    return kel - 273.15;
  }
  kelvinToFahren(kel) {
    return ((kel - 273.15) * 5) / 9 + 32;
  }
  clearFields() {
    this.celsius.value = "";
    this.fahren.value = "";
    this.kelvin.value = "";
  }
}
