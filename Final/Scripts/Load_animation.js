var Reading = document.getElementById('Reading-Animation');
var Leave = document.getElementById('Leave');
var Times = 0;

window.addEventListener('DOMContentLoaded', (event) => {
    Times = 3.5;
    var timer = setTimeout(() => Reading.style.visibility = "hidden", 1000 * Times);

    Leave.addEventListener("click", function() {

        clearTimeout(timer);
    })
});