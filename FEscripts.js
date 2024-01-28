//Hakee selaimen kielen, koon ja nykyisen päivän ja ajan
let language = window.navigator.language;
let height = window.innerHeight;
let width = window.innerWidth;
let date = new Date();

//näyttää tiedot sivulla
document.getElementById("browserLang").innerHTML = "Selaimen kieli: " + language;
document.getElementById("browserSize").innerHTML = "Selaimen koko: " + width + " px " + height + " px";
document.getElementById("browserTimeAndDate").innerHTML = "Saavuttu sisustolle: " + date.toLocaleDateString('fi-FI') + " klo " + date.toLocaleTimeString('fi-FI');