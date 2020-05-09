const kategorija = document.querySelector("#kategorije");
const opcije = document.querySelectorAll(".input-a");
const opcije2 = document.querySelectorAll(".input-b");
const input = document.querySelector("#input");
const output = document.getElementById("output");
const select1 = document.querySelectorAll(".select-a");
const select2 = document.querySelectorAll(".select-b");
function convert() {
  // DUŽINA
  if (kategorija.value === "0") {
    switch (select1[0].value) {
      case "0":
        break;
      case "1":
        switch (select2[0].value) {
          case "0":
            break;
          case "1":
            output.value = input.value;
            break;
          case "2":
            output.value = input.value / 1000;
            break;
          case "3":
            output.value = input.value * 1000;
            break;
          case "4":
            output.value = input.value * 100;
            break;
          case "5":
            output.value = input.value * 10;
            break;
          case "6":
            output.value = input.value * 3.28084;
            break;
          case "7":
            output.value = input.value * 1.09361;
            break;
          case "8":
            output.value = input.value * 0.000621371;
            break;
        }
        break;

      case "2":
        switch (select2[0].value) {
          case "0":
            break;
          case "1":
            output.value = input.value * 1000;
            break;
          case "2":
            output.value = input.value;
            break;
          case "3":
            output.value = input.value * 1000000;
            break;
          case "4":
            output.value = input.value * 100000;
            break;
          case "5":
            output.value = input.value * 10000;
            break;
          case "6":
            output.value = input.value * 3280.84;
            break;
          case "7":
            output.value = input.value * 1093.61;
            break;
          case "8":
            output.value = input.value * 0.621371;
            break;
        }
        break;
      case "3":
        switch (select2[0].value) {
          case "0":
            break;
          case "1":
            output.value = input.value / 1000;
            break;
          case "2":
            output.value = input.value / 1000000;
            break;
          case "3":
            output.value = input.value;
            break;
          case "4":
            output.value = input.value / 10;
            break;
          case "5":
            output.value = input.value / 100;
            break;
          case "6":
            output.value = input.value * 0.00328084;
            break;
          case "7":
            output.value = input.value * 0.00109361;
            break;
          case "8":
            output.value = input.value * 0.000000621371;
            break;
        }
        break;
      case "4":
        switch (select2[0].value) {
          case "0":
            break;
          case "1":
            output.value = input.value / 100;
            break;
          case "2":
            output.value = input.value / 100000;
            break;
          case "3":
            output.value = input.value / 10;
            break;
          case "4":
            output.value = input.value;
            break;
          case "5":
            output.value = input.value * 10;
            break;
          case "6":
            output.value = input.value * 0.0328084;
            break;
          case "7":
            output.value = input.value * 0.0109361;
            break;
          case "8":
            output.value = input.value * 0.00000621371;
            break;
        }
        break;
      case "5":
        switch (select2[0].value) {
          case "0":
            break;
          case "1":
            output.value = input.value / 10;
            break;
          case "2":
            output.value = input.value / 10000;
            break;
          case "3":
            output.value = input.value * 100;
            break;
          case "4":
            output.value = input.value / 10;
            break;
          case "5":
            output.value = input.value;
            break;
          case "6":
            output.value = input.value * 0.328084;
            break;
          case "7":
            output.value = input.value * 0.109361;
            break;
          case "8":
            output.value = input.value * 0.0000621371;
            break;
        }
        break;
      case "6":
        switch (select2[0].value) {
          case "0":
            break;
          case "1":
            output.value = input.value * 0.304799990246;
            break;
          case "2":
            output.value = input.value * 0.000304799990246;
            break;
          case "3":
            output.value = input.value * 304.799990246;
            break;
          case "4":
            output.value = input.value * 30.4799990246;
            break;
          case "5":
            output.value = input.value * 3.04799990246;
            break;
          case "6":
            output.value = input.value;
            break;
          case "7":
            output.value = input.value * 0.333332317333;
            break;
          case "8":
            output.value = input.value * 0.000189393875;
            break;
        }
        break;
      case "7":
        switch (select2[0].value) {
          case "0":
            break;
          case "1":
            output.value = input.value * 0.914402757839;
            break;
          case "2":
            output.value = input.value * 0.000914402757839;
            break;
          case "3":
            output.value = input.value * 914.402757839;
            break;
          case "4":
            output.value = input.value * 91.4402757839;
            break;
          case "5":
            output.value = input.value * 9.14402757839;
            break;
          case "6":
            output.value = input.value * 3.000009144028;
            break;
          case "7":
            output.value = input.value;
            break;
          case "8":
            output.value = input.value * 0.000568183356;
            break;
        }
        break;
      case "8":
        switch (select2[0].value) {
          case "0":
            break;
          case "1":
            output.value = input.value * 1609.3444978926;
            break;
          case "2":
            output.value = input.value * 1.6093444978926;
            break;
          case "3":
            output.value = input.value * 1609000.3444978926;
            break;
          case "4":
            output.value = input.value * 160900.3444978926;
            break;
          case "5":
            output.value = input.value * 16090.3444978926;
            break;
          case "6":
            output.value = input.value * 5280.0018024658;
            break;
          case "7":
            output.value = input.value * 1759.9952363403;
            break;
          case "8":
            output.value = input.value;
            break;
        }
        break;
    }
  } // MASA
  else if (kategorija.value === "1") {
    switch (select1[1].value) {
      case "0":
        break;
      case "1":
        switch (select2[1].value) {
          case "0":
            break;
          case "1":
            output.value = input.value;
            break;
          case "2":
            output.value = input.value / 1000;
            break;
          case "3":
            output.value = input.value * 1000;
            break;
          case "4":
            output.value = input.value * 0.0321507;
            break;
          case "5":
            output.value = input.value * 0.00220462;
            break;
          case "6":
            output.value = input.value * 0.035274;
            break;
        }
        break;
      case "2":
        switch (select2[1].value) {
          case "0":
            break;
          case "1":
            output.value = input.value * 1000;
            break;
          case "2":
            output.value = input.value;
            break;
          case "3":
            output.value = input.value * 1000000;
            break;
          case "4":
            output.value = input.value * 32.1507;
            break;
          case "5":
            output.value = input.value * 2.20462;
            break;
          case "6":
            output.value = input.value * 35.274;
            break;
        }
        break;
      case "3":
        switch (select2[1].value) {
          case "0":
            break;
          case "1":
            output.value = input.value / 1000;
            break;
          case "2":
            output.value = input.value / 1000000;
            break;
          case "3":
            output.value = input.value;
            break;
          case "4":
            output.value = input.value * 0.0000321507;
            break;
          case "5":
            output.value = input.value * 0.00000220462;
            break;
          case "6":
            output.value = input.value * 0.000035274;
            break;
        }
        break;
      case "4":
        switch (select2[1].value) {
          case "0":
            break;
          case "1":
            output.value = input.value * 31.1034;
            break;
          case "2":
            output.value = input.value * 0.0311035;
            break;
          case "3":
            output.value = input.value * 31000.1034;
            break;
          case "4":
            output.value = input.value;
            break;
          case "5":
            output.value = input.value * 0.0685;
            break;
          case "6":
            output.value = input.value * 1.0971429;
            break;
        }
        break;
      case "5":
        switch (select2[1].value) {
          case "0":
            break;
          case "1":
            output.value = input.value * 453.5923;
            break;
          case "2":
            output.value = input.value * 0.4535923;
            break;
          case "3":
            output.value = input.value * 453000.5923;
            break;
          case "4":
            output.value = input.value * 14.58333;
            break;
          case "5":
            output.value = input.value;
            break;
          case "6":
            output.value = input.value * 16;
            break;
        }
        break;
      case "6":
        switch (select2[1].value) {
          case "0":
            break;
          case "1":
            output.value = input.value * 28.3495;
            break;
          case "2":
            output.value = input.value * 0.0283495;
            break;
          case "3":
            output.value = input.value * 28000.3495;
            break;
          case "4":
            output.value = input.value * 0.9114583;
            break;
          case "5":
            output.value = input.value * 0.0625;
            break;
          case "6":
            output.value = input.value;
            break;
        }
        break;
    }
  } //VOLUMEN
  else if (kategorija.value === "2") {
    switch (select1[2].value) {
      case "0":
        break;
      case "1":
        switch (select2[2].value) {
          case "0":
            break;
          case "1":
            output.value = input.value;
            break;
          case "2":
            output.value = input.value / 1000;
            break;
          case "3":
            output.value = input.value * 0.22;
            break;
          case "4":
            output.value = input.value * 0.2642;
            break;
          case "5":
            output.value = input.value * 0.001;
            break;
        }
        break;
      case "2":
        switch (select2[2].value) {
          case "0":
            break;
          case "1":
            output.value = input.value * 1000;
            break;
          case "2":
            output.value = input.value;
            break;
          case "3":
            output.value = input.value * 0.00022;
            break;
          case "4":
            output.value = input.value * 0.0002642;
            break;
          case "5":
            output.value = input.value * 0.000001;
            break;
        }
        break;
      case "3":
        switch (select2[2].value) {
          case "0":
            break;
          case "1":
            output.value = input.value / 0.22;
            break;
          case "2":
            output.value = input.value / 0.00022;
            break;
          case "3":
            output.value = input.value;
            break;
          case "4":
            output.value = input.value * 1.200909090909;
            break;
          case "5":
            output.value = input.value * 0.004545454545;
            break;
        }
        break;
      case "4":
        switch (select2[2].value) {
          case "0":
            break;
          case "1":
            output.value = input.value / 0.2642;
            break;
          case "2":
            output.value = input.value / 0.2642;
            break;
          case "3":
            output.value = input.value / 1.200909090909;
            break;
          case "4":
            output.value = input.value;
            break;
          case "5":
            output.value = input.value * 0.0685;
            break;
        }
        break;

      case "5":
        switch (select2[2].value) {
          case "0":
            break;
          case "1":
            output.value = input.value * 1000;
            break;
          case "2":
            output.value = input.value * 1000000;
            break;
          case "3":
            output.value = input.value * 220;
            break;
          case "4":
            output.value = input.value * 264.17205236;
            break;
          case "5":
            output.value = input.value;
            break;
        }
        break;
    }
  } //SNAGA
  else if (kategorija.value == "3") {
    switch (select1[3].value) {
      case "0":
        break;
      case "1":
        switch (select2[3].value) {
          case "0":
            break;
          case "1":
            output.value = input.value;
            break;
          case "2":
            output.value = input.value * 1000;
            break;
          case "3":
            output.value = input.value / 1000;
            break;
          case "4":
            output.value = input.value * 1.341;
            break;
        }
        break;
      case "2":
        switch (select2[3].value) {
          case "0":
            break;
          case "1":
            output.value = input.value / 1000;
            break;
          case "2":
            output.value = input.value;
            break;
          case "3":
            output.value = input.value / 1000000;
            break;
          case "4":
            output.value = input.value * 0.001341;
            break;
        }
        break;
      case "3":
        switch (select2[3].value) {
          case "0":
            break;
          case "1":
            output.value = input.value * 1000;
            break;
          case "2":
            output.value = input.value * 1000000;
            break;
          case "3":
            output.value = input.value;
            break;
          case "4":
            output.value = input.value * 1341;
            break;
        }
        break;
      case "4":
        switch (select2[3].value) {
          case "0":
            break;
          case "1":
            output.value = input.value / 1.341;
            break;
          case "2":
            output.value = input.value / 0.001341;
            break;
          case "3":
            output.value = input.value / 1341;
            break;
          case "4":
            output.value = input.value;
            break;
        }
        break;
    }
  } else if (kategorija.value == "4") {
    switch (select1[4].value) {
      case "0":
        break;
      case "1":
        switch (select2[4].value) {
          case "0":
            break;
          case "1":
            output.value = input.value;
            break;
          case "2":
            output.value = input.value * (9 / 5) + 32;
            break;
          case "3":
            output.value = (parseFloat(input.value) + 273.15).toFixed(2);
            break;
        }
        break;
      case "2":
        switch (select2[4].value) {
          case "0":
            break;
          case "1":
            output.value = (input.value - 32) * (5 / 9);
            break;
          case "2":
            output.value = input.value;
            break;
          case "3":
            output.value = (parseFloat(input.value) + 459.67) * (5 / 9);
            break;
        }
        break;
      case "3":
        switch (select2[4].value) {
          case "0":
            break;
          case "1":
            output.value = input.value - 273.15;
            break;
          case "2":
            output.value = parseFloat(input.value) * (9 / 5) - 459.67;
            break;
          case "3":
            output.value = input.value;
            break;
        }
        break;
    }
  }
}
const jedinice = new Array();
jedinice[0] = new Array(
  "",
  "m",
  "km",
  "mm",
  "cm",
  "dm",
  "ft",
  "yards",
  "miles"
);
jedinice[1] = new Array("", "g", "kg", "oz(troy)", "pound", "oz");
jedinice[2] = new Array("", "l", "ml", "gal", "gal[US]", "m^3");
jedinice[3] = new Array("", "kW", "W", "MW", "KS");
jedinice[4] = new Array("", "°C", "°F", "K");

function promijenaJedinica() {
  const index = kategorija.value;
  const index2 = parseInt(select2[index].value);
  const indexSelect1 = parseInt(select1[index].value);
  if (index2 == 0 && indexSelect1 != 0) {
    console.log(`${index2}  ${indexSelect1}`);
    document.querySelector(".rezz").style.display = "none";
    document.querySelector(".rezz1").style.display = "block";
    document.querySelector("#jedP").innerHTML = jedinice[index][indexSelect1];
  } else if (indexSelect1 == 0 && index2 != 0) {
    document.querySelector(".rezz1").style.display = "none";
    document.querySelector(".rezz").style.display = "block";
    document.querySelector("#jedK").innerHTML = jedinice[index][index2];
    console.log(`${index2}  ${indexSelect1}`);
  } else if (index2 == 0 && indexSelect1 == 0) {
    document.querySelector(".rezz1").style.display = "none";
    document.querySelector(".rezz").style.display = "none";
    console.log(`${index2}  ${indexSelect1}`);
  } else {
    document.querySelector(".rezz1").style.display = "block";
    document.querySelector(".rezz").style.display = "block";
    document.querySelector("#jedK").innerHTML = jedinice[index][index2];
    document.querySelector("#jedP").innerHTML = jedinice[index][indexSelect1];
    console.log(`${index2}  ${indexSelect1}`);
  }
}

//ODABIR KATEGORIJE
function Odabir() {
  input.value = "";
  output.value = "";
  const index = kategorija.value;

  for (let i = 0; i < opcije.length; i++) {
    if (index == i) {
      opcije[i].style.display = "block";
      opcije2[i].style.display = "block";
      let bcg = document.querySelector(".form-0");

      switch (kategorija.value) {
        case "0":
          bcg.style.backgroundImage = `url(./img/bg${index}.jpg)`;
          break;
        case "1":
          bcg.style.backgroundImage = `url(./img/bg${index}.svg)`;
          break;
        case "2":
          bcg.style.backgroundImage = `url(./img/bg${index}.png)`;
          break;
        case "3":
          bcg.style.backgroundImage = `url(./img/bg${index}.jpg)`;
          break;
        case "4":
          bcg.style.backgroundImage = `url(./img/bg${index}.png)`;
          break;
      }
    } else {
      opcije[i].style.display = "none";
      opcije2[i].style.display = "none";
      // document.querySelector(".form-0").style.backgroundImage = "none";
    }
  }
}
window.onload = Odabir();
window.onload = promijenaJedinica();
