import * as mySvg from './svg.min.js';
import dataTemplate from './demo-data-template.js';

window.onload = (event) => {
 document.title = 'About Us';
 dataTemplate.renderBody('aboutUs.html');

 const main = document.getElementsByTagName('main')[0];
 const article = document.createElement('article');
 main.appendChild(article);

 article.innerHTML = `

<h1 style="font-weight:normal;font-size:40px; color:RoyalBlue">Dolphin powers individuals and businesses worldwide  to create design superintelligence
</h1>

<p style="line-height:1.6">
Over two decades ago, we started our journey into typesetting and design super intelligence. None of the design, data visualization, and e-commerce solutions at the time gave us the control we needed to be successful--so we built our own. Today, businesses of all sizes can benefit from our design revolution.
</p>
<br>

<h2>Our Mission</h2>
<h3 style="font-size:26px; color:teal">Making art design better for everyone</h3>
<p style="line-height:1.6">
We help people create high-quality art designs that are at the same time significantly smaller in file sizes compared to other means. Furthermore, we help them achieve their goals of design intelligence by making it easier to logically create dynamic vector artworks that are highly collaborative, configurable, traceable, secured, and manageable.
</p>

<h3 style="font-size:24px; color:teal">Making data visualization better for everyone</h3>
<p style="line-height:1.6">
We help businesses achieve their goals of business superintelligence by making it easier to create data-driven vector visualizations and feature-rich, user-friendly, and dynamic dashboards that are high-performing and aesthetically pleasing with the ability to collaborate and personalize, thus empowering them to extract valuable business insights with ease and a high degree of accuracy.
</p>

<h3 style="font-size:24px; color:teal">Making e-commerce better for everyone</h3>
<p style="line-height:1.6">
We help people achieve independence by making it easier to start, run, and grow a business by reducing the barriers to business ownership, providing them with a content management system that is data-driven and easily manageable, and helping them manage their big data efficiently, thus making e-commerce better for everyone.
</p>

<h3 style="font-size:24px; color:teal">Making publication automation better for everyone</h3>
<p style="line-height:1.6">
Our technologies allow streamlining of complex publications and workflows to be automated with ease for all print and digital outputs with intelligent dynamic publishing. Our publication automation platform empowers businesses to create engaging reports, presentations, infographics, catalogs, datasheets, and more using automated templates populated with dynamic data from primary sources, thus making the publications consistent, efficient, collaborative, and straightforward to manage efficiently without worrying about time-consuming formatting, inputs from a large number of multiple authors, and large file sizes.
</p>

<br><br>


`;
};
