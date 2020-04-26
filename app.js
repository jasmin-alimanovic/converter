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
        }
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
  console.log(index);
}
window.onload = Odabir();
