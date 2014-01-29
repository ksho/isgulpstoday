var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

var now = new Date();
var day = days[ now.getDay() ];
var month = months[ now.getMonth() ];
var el = document.getElementById("message");

if (day == 'Wednesday') {
    el.innerHTML = 'YES!';
} else if (day == 'Tuesday') {
    el.innerHTML = 'no, but it feels close!';
} else {
    el.innerHTML = 'no :('
}