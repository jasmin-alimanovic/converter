const kategorija = document.querySelector("#kategorije");
const opcije = document.querySelectorAll(".input-a");
const opcije2 = document.querySelectorAll(".input-b");
const input = document.querySelector("#input");
const output = document.getElementById("output");
function convert() {
  if (input.value == "0") input.value = "";

  const select1 = document.querySelector(".select-a");
  const select2 = document.querySelector(".select-b");

  if (kategorija.value == 0) {
    switch (select1.value) {
      case "0":
        break;
      case "1":
        switch (select2.value) {
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
        switch (select2.value) {
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
        switch (select2.value) {
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
        switch (select2.value) {
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
        switch (select2.value) {
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
        switch (select2.value) {
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
        switch (select2.value) {
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
        switch (select2.value) {
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
  }
}

function Odabir() {
  input.value = "";
  output.value = "";
  const index = kategorija.value;
  for (let i = 0; i < opcije.length; i++) {
    if (index == i) {
      opcije[i].style.display = "flex";
      opcije2[i].style.display = "block";
    } else {
      opcije[i].style.display = "none";
      opcije2[i].style.display = "none";
    }
  }
}
window.onload = Odabir();
