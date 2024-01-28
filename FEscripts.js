//Hakee selaimen kielen, koon ja nykyisen päivän ja ajan
const language = window.navigator.language;
const height = window.innerHeight;
const width = window.innerWidth;
const screenWidth = screen.availWidth;
const screenHeight = screen.availHeight;
const date = new Date();
const options =  {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
};

//näyttää tiedot sivulla
document.getElementById("browserLang").innerHTML = "Selaimen kieli: " + language;
document.getElementById("browserSize").innerHTML = "Selaimen koko: " + width + " px  X " + height + " px";
document.getElementById("screenSize").innerHTML = "Näytön koko: " + screenWidth + " px  X " + screenHeight + " px";
document.getElementById("browserTimeAndDate").innerHTML = "Saavuttu sisustolle: " + date.toLocaleDateString('fi-FI', options) + " klo " + date.toLocaleTimeString('fi-FI');
