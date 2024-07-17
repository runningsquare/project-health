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

// Adapted from Apex Chart
var options = {
    series: [{
        name: "Aged 60 and over",
        data: [763929, 788608, 815427, 843788, 872694, 901597, 930629, 959373, 988319, 1018264, 1049748]
    }],
    chart: {
        height: 350,
        type: 'line',
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight'
    },
    title: {
        text: 'Number of persons aged 60 years or over (Global)',
        align: 'left'
    },
    grid: {
        row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
        },
    },
    xaxis: {
        categories: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
    },
    colors:['#C5FAD5']
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();