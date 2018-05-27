//date -----------------------------

var date = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  
var today = days[date.getDay()]; 
var nbday = date.getDate() 
var month = months[date.getMonth()] 
var year = date.getFullYear() 

document.getElementById('day').innerHTML = today; 
document.getElementById('year').innerHTML = year; 
document.getElementById('month').innerHTML = month; 
document.getElementById('nbday').innerHTML = nbday; 


// child -----------------------------
// this script moved to public/js/child.js
// and in called at the end of info.pug

// collapsible -----------------------------
// this script moved to public/js/collapse.js
// and in called at the end of techniques.pug