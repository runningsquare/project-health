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


/////// Carousel ///////
let imgDivs =  document.getElementsByClassName('carousel-img-div');

// Track each image div display value
let img = [false, false, false, false, false, false, false, false, false, false];

// Store all image html
let imgCode = [
    '<img onclick="showFact(0, this)" src="images/facts/fact-1-pic.jpg" alt="medical staff looking at xray"><p>Fact 1</p>',
    '<img onclick="showFact(1, this)" src="images/facts/fact-2-pic.jpg" alt="elderly coughing"><p>Fact 2</p>',
    '<img onclick="showFact(2, this)" src="images/facts/fact-3-pic.png" alt="tuberculosis occurence map"><p>Fact 3</p>',
    '<img onclick="showFact(3, this)" src="images/facts/fact-4-pic.jpg" alt="child being diagnosed for tuberculosis"><p>Fact 4</p>',
    '<img onclick="showFact(4, this)" src="images/facts/fact-5-pic.jpg" alt="cartoon human coughing"><p>Fact 5</p>',
    '<img onclick="showFact(5, this)" src="images/facts/fact-6-pic.jpg" alt="tuberculosis medicines"><p>Fact 6</p>',
    '<img onclick="showFact(6, this)" src="images/facts/fact-7-pic.jpg" alt="woman smiling"><p>Fact 7</p>',
    '<img onclick="showFact(7, this)" src="images/facts/fact-8-pic.png" alt="call to end tuberculosis poster"><p>Fact 8</p>',
    '<img onclick="showFact(8, this)" src="images/facts/fact-9-pic.jpg" alt="how tuberculosis spread"><p>Fact 9</p>',
    '<img onclick="showFact(9, this)" src="images/facts/fact-10-pic.jpg" alt="researcher looking at research"><p>Fact 10</p>'
];

// Display initial batch of images
for (let i = 0; i < imgDivs.length * 2; i++) {

    if (i < 5) {
        imgDivs[i].innerHTML = imgCode[i];
        img[i] = true;
    }
    else {
        // Set rest of images to not displayed
        img[i] = false;
    }
}

// Display new batch of images
function newBatch() {

    for (var i = 0; i < imgNums.length; i++) {
        imgDivs[i].innerHTML = imgCode[imgNums[i]];
    }
}

// Get the current start and end images
let startImg = 0;
let endImg = 0;
let count = 0;

function getCurrentImgs() {

    for (let i = 0; i < 2; i++) {

        for (let i = 0; i < img.length; i++) {
            
            // Check for consecutive true
            if (img[i] == true) {
                count++;
            }
            else {
                count = 0;
            }
        
            if (count == 5) {
                endImg = i;
    
                if (i-4 < 0) {
                    endImg = i;
                    startImg = 10 + (i - 4);
                }
                else {
                    startImg = i - 4;
                }
            }
        }
    }
}

getCurrentImgs();

// Get the new start and end images
let newStartImg = 0;
let newEndImg = 0;
let imgNum1 = 0, imgNum2 = 0, imgNum3 = 0, imgNum4 = 0, imgNum5 = 0;
let imgNums = [];

function calculate(num) {

    newStartImg = startImg + num;

    imgNum1 = newStartImg;
    imgNum2 = imgNum1 + 1;
    imgNum3 = imgNum1 + 2;
    imgNum4 = imgNum1 + 3;
    imgNum5 = imgNum1 + 4;

    if (newStartImg > 5) {

        imgNum1 = newStartImg;
        imgNum2 = imgNum1 + 1;
        imgNum3 = imgNum1 + 2;
        imgNum4 = imgNum1 + 3;
        imgNum5 = imgNum1 + 4;

        if (imgNum1 > 9) {
            imgNum1 = 0;
        }
        if (imgNum2 > 9) {
            imgNum2 = imgNum2 - 10;
        }
        if (imgNum3 > 9) {
            imgNum3 = imgNum3 - 10;
        }
        if (imgNum4 > 9) {
            imgNum4 = imgNum4 - 10;
        }
        if (imgNum5 > 9) {
            imgNum5 = imgNum5 - 10;
        }
    }
    else if (newStartImg < 0) {
        newStartImg = 9;

        imgNum1 = newStartImg;
        imgNum2 = 0;
        imgNum3 = 1;
        imgNum4 = 2;
        imgNum5 = 3;
    }

    newEndImg = endImg + num;

    if (newEndImg > 9) {
        newEndImg = 0;
    }
    else if (newEndImg < 0) {
        newEndImg = 9;
    }

    // Allocate each image div display value
    for (let i = 0; i < img.length; i++) {
        img[i] = false;

        if (i == imgNum1 || i == imgNum2 || i == imgNum3 || i == imgNum4 || i == imgNum5) {
            img[i] = true;
        }
    }

    // Update current image numbers from start to end
    imgNums = [imgNum1, imgNum2, imgNum3, imgNum4, imgNum5];

    getCurrentImgs();
    newBatch();

    // Clear previous enhlarged image
    for (let i = 0; i < imgDivs.length; i++) {
        imgDivs[i].style.transform = '';
    }
}

// Display Facts
// Store all facts html
let facts = [
    '<p class="col-10">Fact 1:<br>In 2020, an estimated 10 million people fell ill with tuberculosis(TB) worldwide. 5.6 million men, 3.3 million women and 1.1 million children. TB is present in all countries and age groups. But TB is curable and preventable.</p>',
    '<p class="col-10">Fact 2:<br>A total of 1.5 million people died from TB in 2020 (including 214 000 people with HIV). Worldwide, TB is the 13th leading cause of death and the second leading infectious killer after COVID-19 (above HIV/AIDS).</p>',
    '<p class="col-10">Fact 3:<br>In 2020, the 30 high TB burden countries accounted for 86% of new TB cases. Eight countries account for two thirds of the total, with India leading the count, followed by China, Indonesia, the Philippines, Pakistan, Nigeria, Bangladesh and South Africa.</p>',
    '<p class="col-10">Fact 4:<br>In 2020, 1.1 million children fell ill with TB globally. Child and adolescent TB is often overlooked by health providers and can be difficult to diagnose and treat.</p>',
    '<p class="col-10">Fact 5:<br>TB is the leading killer of people with HIV. In 2020, there were 375 962 people who had TB and HIV were notified, of whom 88% were on antiretroviral therapy.  Most of the gaps in detection and treatment were in the WHO African Region, where the burden of HIV associated TB is highest.</p>',
    '<p class="col-10">Fact 6:<br>Multidrug-resistant TB (MDR-TB) remains a public health crisis and a health security threat. Only about one in three people with drug resistant TB accessed treatment in 2020. In some cases an even more severe form of multi-drug resistant TB may develop with bad treatment. Pre-extensively drug-resistant TB (pre-XDR-TB) and (XDR-TB) are forms of TB that responds to even fewer available medicines.</p>',
    '<p class="col-10">Fact 7:<br>TB treatment saved about 66 million lives globally between 2000 and 2020, but important diagnostic and treatment gaps persist. The treatment success rate for people with TB was 86% in 2019.</p>',
    '<p class="col-10">Fact 8:<br>Globally, TB incidence is falling at about 2% per year (1.9% from 2019 to 2020). This is much slower than the 4–5% annual decline that was required to achieve the 2020 milestones of the WHO End TB Strategy.</p>',
    '<p class="col-10">Fact 9:<br>Of the estimated 9.9 million people who fell ill with TB in 2020, only 5.8 million were detected and notified in 2020, leading to a gap of 4.1 million cases. Ending the TB epidemic by 2030 is among the health targets of the Sustainable Development Goals.</p>',
    '<p class="col-10">Fact 10:<br>Funding for the provision of TB prevention, diagnostic and treatment services increased from 2010 to 2019, but spending in low and middle-income countries fell from US$ 5.8 billion in 2019 to US$5.3 billion in 2020. This falls far short of the target of US$13 billion per year by 2022 that was set at the first UN high-level meeting on TB.  For research and development, at least an extra US$ 1.1 billion per year is needed to accelerate the development of new tools.</p>'
]

// Get facts div
let factsDiv =  document.getElementsByClassName('facts-div')[0];

// Display Fact 1 by default when loaded
factsDiv.innerHTML = facts[0];

// Display fact when image is clicked
function showFact(num, ele) {

    factsDiv.innerHTML = facts[num];

    // Clear previous enlarged image
    for (let i = 0; i < imgDivs.length; i++) {
        imgDivs[i].style.transform = '';
    }

    // Enlarge current image when clicked
    ele.parentNode.style.transform = 'scale(1.1)';
}