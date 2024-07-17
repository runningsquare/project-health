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

// Display Read More Section on Scroll
let header = document.getElementsByClassName("readmore-header")[0];
let articles = document.getElementsByClassName("readmore-article-a");

window.addEventListener("scroll", () => {

    // Change scrolled value to cater different screen sizes
    let scrolled = 500;

    if (window.innerWidth <= 576) {
        scrolled = 100;
    }

    // Display Read More Content When user scrolled more than 500px
    if (window.scrollY > scrolled) {

        // Translate Read More Header to Move In From Top
        header.style.transition = "opacity 2.5s, transform 2.5s";
        header.style.transform = "translate(0, 0)";
        header.style.opacity = 1;

        // Translate Read More Articles to Move In From Left
        for (let i = 0; i < articles.length; i++) {

            articles[i].style.transform = "translate(0, 0)";
            articles[i].style.opacity = 1;
            articles[i].style.transition = "opacity 2s, transform 2s";

            // Ensure Card Effect Applies Only After Read More Articles Transition Is Done
            articles[i].addEventListener("transitionend", () => {

                // Translate Read More Articles For Card Effect on Hover
                articles[i].addEventListener("mouseover", () => {
                    articles[i].style.transition = "transform .2s";
                    articles[i].style.transform = "translate(-2%, -2%)";
                })
        
                 articles[i].addEventListener("mouseout", () => {
                    articles[i].style.transition = "transform .2s";
                    articles[i].style.transform = "translate(0, 0)";
                })
            })
        }
    }
})

// When On Click Change Button Background Color
function changebtn(num) {
    let qnBtn = document.getElementsByClassName("qn-button");
    let cssObj = window.getComputedStyle(qnBtn[num]);
    let bgColor = cssObj.getPropertyValue("background-color");

    if (bgColor == "rgb(197, 250, 213)") {
        qnBtn[num].style.backgroundColor = "black";
        qnBtn[num].style.color = "white";
        qnBtn[num].style.border = "2px solid #C5FAD5";
    }
    else {
        qnBtn[num].style.backgroundColor = "#C5FAD5";
        qnBtn[num].style.color = "black";
    }
}