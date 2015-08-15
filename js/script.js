debugger
//while(true){
function checkTime(){
  var time = new Date();
  var hours = time.getHours();
  var seconds = time.getSeconds();
  var timeHTML = document.getElementById("time");
  timeHTML.value="The time is " + hours.toString() + ":" + seconds.toString();
}
//}
