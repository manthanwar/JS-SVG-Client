import * as mySvg from './svg.min.js';
import dataTemplate from './demo-data-template.js';

window.onload = (event) => {
 document.title = 'Careers';
 dataTemplate.renderBody('careers.html');

 const main = document.getElementsByTagName('main')[0];
 const article = document.createElement('article');
 main.appendChild(article);

 article.innerHTML = `

<style>
article{line-height:1.6}
h1{font-weight:normal;font-size:40px; color:RoyalBlue;}
h2{font-weight:normal;margin-top:40px;}
h3{font-size:26px; color:teal}
li{font-size:22px; color:maroon}
</style>

<h1>We are hiring!</h1>

<p>
Whether you're looking to work in software, testing, customer support or any of our other roles we are here to help you. Explore this page and the rest of our website to discover more about our opportunities and life at Dolphin. If you are interested in any one of the following openings then please email us with your latest CV along with a covering letter on why you wish to join us.
</p>


<h2>Current Openings</h2>
<ul>
<li>Data scientists</li>
<li>Graphic designers</li>
<li>DevOps engineers</li>
<li>Marketing executives</li>
</ul>


<h3>About the Team</h3>
<p>
Our employees work in Asia, Europe and America with one mission, to "co-innovate design superintelligence". We are looking for dynamic colleagues who share our passion for technology and care for our planet. In return, we offer you great career opportunities to grow yourself in a truly global culture where respect, value creation, collaboration, integrity, and gratitude are highly valued and exhibited in everything we do.
</p>


<h3>Diverse, Equitable & Inclusive culture</h3>
<p>
Dolphin is an Equal Opportunity Employer. Dolphin wants a diverse, equitable and inclusive culture.  We will actively recruit, develop, and promote people from a variety of backgrounds who differ in terms of experience, knowledge, thinking styles, perspective, cultural background, and socioeconomic status.  We will not discriminate based on race, skin color, age, sex, gender identity and expression, sexual orientation, religion, belief, political opinion, nationality, ethnicity, place of origin, disability, family relations or any other circumstances. Dolphin values differences and enables everyone to belong, contribute, succeed, and demonstrate their full potential.
</p>

<p>
Are you being referred to one of our roles? If so, ask your connection at Dolphin about our Employee Referral process!
</p>

<br><br>

`;
};
