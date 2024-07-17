// Style the active nav link
document.getElementById("navs-1-div").style.backgroundColor = "black";
document.getElementById("navs-1").style.color = "white";

// Style the nav link when mouseover
function mouseoverNavsLink(navsNum) {
    document.getElementById(navsNum + "-div").style.backgroundColor = "black";
    document.getElementById(navsNum).style.color = "white";
}

// Style the nav link when mouseout
function mouseoutNavsLink(navsNum) {
    document.getElementById(navsNum + "-div").style.backgroundColor = "";
    document.getElementById(navsNum).style.color = "black";
}

// Close pop up
function closePopup() {
    document.getElementsByClassName("popup-div")[0].style.display = "none";
    document.getElementsByClassName("popup-div-behind")[0].style.display = "none";
}