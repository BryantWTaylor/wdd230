let hambutton = document.querySelector('#hambutton');
let navigation = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {
    navigation.classList.toggle('responsive');
});

const date = new Date()

let update = new Date(document.lastModified)

let fullDate = new Intl.DateTimeFormat("en-US", {dateStyle: "full"}).format();
let year = date.getFullYear();

let upyear = update.getFullYear();
let upmonth = update.getMonth() + 1;
let upday = update.getDay();

let uphour = update.getHours();
let upminutes = update.getMinutes();
let upseconds = update.getSeconds();

document.querySelector("#dateInfo").innerHTML = `Last Modification: ${upmonth}/${upday}/${upyear} ${uphour}:${upminutes}:${upseconds}`;

document.querySelector("#yearInfo").innerHTML = `&copy; ${year} Elendel Chamber`;

document.querySelector("#topDate").innerHTML = `${fullDate}`;