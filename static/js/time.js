var interval = setInterval(timestamp, 1000);


 function timestamp(){
 var date = new Date();

 var timeElement = document.getElementById('clock');
 timeElement.innerHTML = date.toLocaleTimeString();
  }
