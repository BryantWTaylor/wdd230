const date = new Date()

let update = new Date(document.lastModified)

let year = date.getFullYear();

let upyear = update.getFullYear();
let upmonth = update.getMonth() + 1;
let upday = update.getDay();

let uphour = update.getHours();
let upminutes = update.getMinutes();
let upseconds = update.getSeconds();

document.querySelector("#dateInfo").innerHTML = `&copy; ${year} | Bryant W. Taylor | Last updated: ${upmonth}/${upday}/${upyear} ${uphour}:${upminutes}:${upseconds}`

