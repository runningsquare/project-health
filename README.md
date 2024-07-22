# PROJECTHEALTH
Web Development course final assignment (Aug 2022)

## Description:
ProjectHealth is a simple website that displays articles on topics about health.
This Final project is inspired by the recent global pandamic, covid19. Due to the pandamic, articles about health are popular among readers. Thus, ProjectHealth is created to provide a platform where people can read up articles about health topics and stay relevant.
The website design is inspired by the National Geographic website for its simple yet impactful look. Additionally, each article page explores a different article layout.

## html
The website displays 6 html to the users; index.html, virus.html, drugs.html, environment.html, ageing.html and facts.html. Below are the purpose of the following htmls:

### index.html
This is the homepage users will first see when they visit the website. Here, the users will see the featured and latest articles on the website. Users can click on any of the article links and it will bring them to the article page.

In the top navigation bar, under the dropdown for topics, users can choose from the 5 different topics (virus, drugs, environment, ageing, facts). Clicking on any will bring them to the corresponding article.

### virus.html
This page displays common questions and answers about monkey pox using bootstrap's collapse buttons. A list of buttons containing questions related to monkey pox are displayed. When users click on any question, short answers appear below the button. The buttons uses the website's colour theme. In the state of collapse or not, the buttons displays different button styling while maintaining the website colour theme.

### drugs.html
This page displays an article about quitting tobacco. On the top of the article plays a short video about 'What happens When You Stop Smoking?', followed by discussion and pictures for the rest of the page. The page separates chuncks of text into paragraphs and places images side by side. This can allow users to have an easier time reading and digesting the article information.

### environment.html
When users navigate to this article page, they will see 2 sections. The first section contains the title, subtitle, few paragraphs and a slideshow, displaying information about the environment article. The second section displays information as a list. It displays a different background and styling from the first section.

### ageing.html
This article page displays information about ageing to users in parts. Each part displays a paragraph about the section accompanied by a chart from apex api, infographic or relevant image.

### facts.html
This article page is about 10 facts on tuberculosis. The top of the page conveys information about tuberculosis in short paragraphs. Below, a carousel with 10 images are displayed. Clicking on any image will show the users a fact about tuberculosis.

## javascript
There are 6 javascript files for the 6 pages in the website. In all of these javascript files, they perform the following user interctions:

- Styling of the 'Topics' dropdown in the top navigation bar when users mouseover it
- For each of the 5 article page, display a 'Read This Next' section that displays links to other articles. The event listener pays attention when users scroll the page. When the user scrolls to the end of the page, the 'Read This Next' header translates to move in from the top and links to other articles in the form of cards translates to move in from the left. Hovering over any article cards translates the cards and changes the background colour to indicate that it is selected.

### index.js
In the homepage, there is a pop up at the top of the page to allow users to subscribe to the website. Users can press the link to subscribe now or press the 'x' button to close the pop up.

### virus.js
This file detects when users click on the collapse buttons and changes the background colour accordingly.

### environment.js
This file accesses the bootstrap carousel element to change its cofiguration settings of slide interval, pause and touch.

### ageing.js
This file adapts from apex chart and customises the values and options to display on the website ageing article page.

### facts.js
This file manages the carousel display and interaction, such as the display of new images when users click on the arrow buttons in the carousel.

## Resources

### Website Inspirations:
- nationalgeographic.com, 'National Geographic', n.d. [Online]. Available: https://www.nationalgeographic.com/ [Accessed: 10-Aug-2022]
- free-css.com, 'Newserific Free CSS Template', 2008. [Online]. Available: https://www.free-css.com/free-css-templates/page2/newserific [Accessed: 10-Aug-2022]
- who.int, 'World Health Organisation', n.d. [Online]. Available: https://www.who.int/ [Accessed: 10-Aug-2022]

### Article Content Taken From:
who.int, 'World Health Organisation', n.d. [Online]. Available: https://www.who.int/ [Accessed: 10-Aug-2022]

#### Virus Article
who.int, 'Monkey Pox', 2022. [Online]. Available: https://www.who.int/news-room/questions-and-answers/item/monkeypox [Accessed: 11-Aug-2022]

#### Drugs Article
who.int, 'Quitting Tobacco', n.d. [Online]. Available: https://www.who.int/activities/quitting-tobacco [Accessed: 11-Aug-2022]

#### Environment Article
who.int, 'Billions of people still breathe unhealthy air: new WHO data', 2022. [Online]. Available: https://www.who.int/news/item/04-04-2022-billions-of-people-still-breathe-unhealthy-air-new-who-data [Accessed: 11-Aug-2022]

#### Ageing Article
who.int, 'Ageing: Global population', 2010. [Online]. Available: https://www.who.int/news-room/questions-and-answers/item/population-ageing [Accessed: 11-Aug-2022]

#### Ageing Article Apex Chart Content Citation
who.int, 'Maternal, newborn, child and adolescent health and ageing data portal', n.d. [Online]. Available: https://platform.who.int/data/maternal-newborn-child-adolescent-ageing/indicator-explorer-new/mca/number-of-persons-aged-over-60-years-or-over-(thousands) [Accessed: 12-Aug-2022]

#### Facts Article
who.int, '10 facts on tuberculosis', 2021. [Online]. Available: https://www.who.int/news-room/facts-in-pictures/detail/tuberculosis [Accessed: 11-Aug-2022]

### Resources Citation:
- getbootstrap.com, 'Grid system', n.d. [Online]. Available: https://getbootstrap.com/docs/4.0/layout/grid/ [Accessed: 12-Aug-2022]
- getbootstrap.com, 'Collapse', n.d. [Online]. Available: https://getbootstrap.com/docs/4.0/components/collapse/ [Accessed: 12-Aug-2022]
- getbootstrap.com, 'Carousel', n.d. [Online]. Available: https://getbootstrap.com/docs/5.2/components/carousel/ [Accessed: 12-Aug-2022]
- apexcharts.com, 'Chart Demos > Line Charts > Basic', n.d. [Online]. Available: https://apexcharts.com/javascript-chart-demos/line-charts/basic/ [Accessed: 12-Aug-2022]

### Fonts:
#### Logo Font
Cameral Dias, 'Karmatic Arcade Font Family', n.d. [Online]. Available: https://www.cdnfonts.com/karmatic-arcade.font [Accessed: 11-Aug-2022]

#### Navigation Font
Cameral Dias, F Mello, J Smith, P Garnham, S de Rozario, 'ITV Reem Web Font Family', n.d. [Online]. Available: https://www.cdnfonts.com/itv-reem-web.font [Accessed: 11-Aug-2022]

#### Header Font
Cameral Dias, McLetters, 'Labor Union Font Family', n.d. [Online]. Available: https://www.cdnfonts.com/labor-union.font [Accessed: 11-Aug-2022]

#### Description Font
Cameral Dias, Eko Bimantara, 'Hando Soft Trial Font Family', n.d. [Online]. Available: https://www.cdnfonts.com/hando-soft-trial.font [Accessed: 11-Aug-2022]

### Bootstrap Social Media Icons:
- icons.getbootstrap.com, 'Facebook', n.d. [Online]. Available: https://icons.getbootstrap.com/icons/facebook/ [Accessed: 11-Aug-2022]
- icons.getbootstrap.com, 'Instagram', n.d. [Online]. Available: https://icons.getbootstrap.com/icons/instagram/ [Accessed: 11-Aug-2022]
- icons.getbootstrap.com, 'Linkedin', n.d. [Online]. Available: https://icons.getbootstrap.com/icons/linkedin/ [Accessed: 11-Aug-2022]
- icons.getbootstrap.com, 'Twitter', n.d. [Online]. Available: https://icons.getbootstrap.com/icons/twitter/ [Accessed: 11-Aug-2022]
- icons.getbootstrap.com, 'Youtube', n.d. [Online]. Available: https://icons.getbootstrap.com/icons/youtube/ [Accessed: 11-Aug-2022]

### Picture Citations:
#### Ageing Image
Sean Duke, 'Episode 3: Can science defeat ageing? CRISPR for CF; How will autonomous cars change our cities?', 2018. [Online]. Available: https://sciencespinning.com/2018/05/25/can-science-defeat-ageing-crispr-for-cf-how-will-autonomous-cars-will-change-our-cities/ [Accessed: 10-Aug-2022]
#### Tuberculosis Image
The Conversation, 'Articles on Tuberculosis', 2022. [Online]. Available: https://theconversation.com/ca/topics/tuberculosis-1412 [Accessed: 10-Aug-2022]
#### Environment Image
Photo by <a href="https://unsplash.com/@thomasrichter?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Thomas Richter</a> on <a href="https://unsplash.com/s/photos/environment?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
#### Drugs Image
Photo by <a href="https://unsplash.com/@kilianfoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kilian Seiler</a> on <a href="https://unsplash.com/s/photos/tobacco?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
#### Virus Image
Photo by <a href="https://unsplash.com/@cdc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">CDC</a> on <a href="https://unsplash.com/s/photos/virus?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

#### monkeypox-symptoms Image
froedtert.com, 'Monkeypox Symptoms, Risk Factors and Prevention', 2022. [Online]. Available: https://www.froedtert.com/stories/monkeypox-symptoms-risk-factors-and-prevention [Accessed: 10-Aug-2022]
#### monkeypox-test Image
hindustantimes.com, 'Amid concerns over monkeypox, Delhi directs all hospitals to be on alert', 2022. [Online]. Available: https://www.hindustantimes.com/cities/delhi-news/monkeypox-delhi-govt-directs-all-hospitals-to-be-on-alert-101654113914619.html [Accessed: 10-Aug-2022]
#### monkeypox-children Image
voanews.com, 'Explainer: What is Monkeypox and Where Is it Spreading?', 2022. [Online]. Available: https://www.voanews.com/a/explainer-what-is-monkeypox-and-where-is-it-spreading-/6580815.html [Accessed: 10-Aug-2022]

#### Quitting Tobacco Video
AsapSCIENCE, 'What Happens When You Stop Smoking?', 2017. [Online]. Available: https://www.youtube.com/watch?v=o3I0mJ2RfU0 [Accessed: 10-Aug-2022]
#### tobacco-components & tobacco-effects
mountsinai.org, 'Risks of tobacco', n.d. [Online]. Available: https://www.mountsinai.org/health-library/special-topic/risks-of-tobacco [Accessed: 10-Aug-2022]

#### Environemnt Page Background Image
Photo by <a href="https://unsplash.com/@whale?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Matthew Smith</a> on <a href="https://unsplash.com/s/photos/environment?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
#### Carousel Images
- Photo by <a href="https://unsplash.com/@byshark?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nick</a> on <a href="https://unsplash.com/s/photos/air-pollution?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- Photo by <a href="https://unsplash.com/@boxedwater?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Boxed Water Is Better</a> on <a href="https://unsplash.com/s/photos/environment?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- Photo by <a href="https://unsplash.com/@filipz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Filip Zrnzević</a> on <a href="https://unsplash.com/s/photos/environment?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

#### ageing-facilities
Photo by <a href="https://unsplash.com/@cheungyin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Cheung Yin</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
#### ageing-infographic
who.int, 'WHO: Number of people over 60 years set to double by 2050; major societal changes required', 2015. [Online]. Available: https://www.who.int/news/item/30-09-2015-who-number-of-people-over-60-years-set-to-double-by-2050-major-societal-changes-required [Accessed: 10-Aug-2022]
#### elderly-family
Photo by <a href="https://unsplash.com/@jonecohen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Johnny Cohen</a> on <a href="https://unsplash.com/s/photos/elderly-family?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

#### Facts Page
- Photo by <a href="https://unsplash.com/@cdc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">CDC</a> on <a href="https://unsplash.com/s/photos/tuberculosis?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- health.clevelandclinic.org, 'Can a Cough Be Related to Heart Issues?', 2022. [Online]. Available: https://health.clevelandclinic.org/persistent-cough-it-may-be-a-sign-of-heart-failure/ [Accessed: 10-Aug-2022]
- who.int, 'Estimated TB incidence rates, 2016', 2016. [Online]. Available: http://gamapserver.who.int/mapLibrary/Files/Maps/gho_tb_incidence_2016.png [Accessed: 10-Aug-2022]
- ucl.ac.uk, 'Treatment length reduced for children with tuberculosis', 2022. [Online]. Available: https://www.ucl.ac.uk/news/2022/mar/treatment-length-reduced-children-tuberculosis [Accessed: 10-Aug-2022]
- Melvin Sanicas, 'What makes TB the world's most infectious killer?', n.d. [Online]. Available: https://www.ted.com/talks/melvin_sanicas_what_makes_tb_the_world_s_most_infectious_killer [Accessed: 10-Aug-2022]
- Miranda S. Bradley, MD; Carey Jackson, MD, 'Tuberculosis Series: Treatment', 2020. [Online]. Available: https://ethnomed.org/resource/tuberculosis-series-treatment/ [Accessed: 10-Aug-2022]
- Elizabeth Wangeci, 2016. [Online]. Available: https://www.endtb.org/feature/blog-im-cured-my-fight-against-tb-isnt-over [Accessed: 10-Aug-2022]
- World Health Organization, 'WHO calls on the world to “Gear up to End TB”', 2015. [Online]. Available: https://www.tbonline.info/posts/print/who-calls-world-gear-end-tb/ [Accessed: 10-Aug-2022]
- Tanmaya Das, 'Patients with tuberculosis face social stigma', 2021. [Online]. Available: https://www.sundayguardianlive.com/news/patients-tuberculosis-face-social-stigma [Accessed: 10-Aug-2022]
- tballiance.org, 'With tuberculosis resurgent after two years of COVID-19-inspired neglect, TB Alliance is awarded USAID funding to develop new treatments', 2022. [Online]. Available: https://www.tballiance.org/news/tuberculosis-resurgent-after-two-years-covid-19-inspired-neglect-tb-alliance-awarded-usaid [Accessed: 10-Aug-2022]
