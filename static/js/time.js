
var interval = setInterval(timestamp, 1000);


 function timestamp(){
 var dateOptions = { hour12: false };
 var dateLocale = 'en-US'
 var date = new Date();

 var timeElement = document.getElementById('clock');
 timeElement.innerHTML = date.toLocaleTimeString(dateLocale, dateOptions);
  }
