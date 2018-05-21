//date 

var date = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  
var today = days[date.getDay()]; 
var nbday = date.getDate() 
var month = months[date.getMonth()] 
var year = date.getFullYear() 
  
console.log(days[date.getDay()]);
console.log(months[date.getMonth()]); 
console.log(date.getDate());
console.log(date.getFullYear());

document.getElementById('day').innerHTML = today; 
document.getElementById('year').innerHTML = year; 
document.getElementById('month').innerHTML = month; 
document.getElementById('nbday').innerHTML = nbday; 


// child
var childNumber = 3;

function addChild() {
  var parent = document.getElementById('i-want-more-children');
  var newChild = '<p>Child ' + childNumber + '</p>';
  parent.insertAdjacentHTML('beforeend', newChild);
  childNumber++;
}

//collapsible

  
  $(document).ready(function($) {
    $('#accordion').find('.accordion-toggle').click(function(){

      //Expand or collapse this panel
      $(this).next().slideToggle('slow');

      //Hide the other panels
      $(".accordion-content").not($(this).next()).slideUp('fast');

    });
  });
