document.addEventListener("DOMContentLoaded", function() {
    var menu = document.getElementById("myLinks");
    menu.style.display = "none"; 
});

function toggleMenu() {
    var x = document.getElementById("myLinks");
    var y = document.querySelector(".hamburgemenu__hamburgericon");
    var z = document.querySelector(".hamburgemenu__cancelicon");

    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";
    } else {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "block";
    }
}
