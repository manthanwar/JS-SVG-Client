import * as mySvg from './svg.min.js';
import dataTemplate from './demo-data-template.js';

window.onload = (event) => {
 document.title = 'Cookies';
 dataTemplate.renderBody('cookies.html');

 const main = document.getElementsByTagName('main')[0];
 const article = document.createElement('article');
 main.appendChild(article);

 article.innerHTML = `

<h1 style="font-weight:normal;font-size:40px; color:RoyalBlue">Cookie Policy
</h1>

<h2 style="font-weight:normal;font-size:28px; color:teal">How We Use Cookies</h2>

<div style="line-height:1.6">
<p>
Like many websites, we use “cookies,” which are small text files that are stored on your computer or equipment when you visit certain online pages that record your preferences. We use cookies to track use of our Websites and online services. We may also use cookies to monitor traffic, improve the Websites, and make it easier and/or relevant for your use. This Website is functional without the retention of cookies. You have the ability to accept or decline cookies. Most web browsers automatically accept cookies, but, if you prefer, you can usually modify your browser setting to decline cookies. For more information on cookies and how to disable them, you can consult the information provided by the Interactive Advertising Bureau at <a data-rel="noopener" href="http://www.allaboutcookies.org/" target="_blank" title="All About Cookies">www.allaboutcookies.org</a>.
</p>
<p>
Like some websites, we may use web beacons or flash cookies. A web beacon or flash cookie (also known as an “action tag” “tracer tag,” or “single-pixel GIF”) is an invisible graphic on a web page or e-mail newsletter that is programmed to collect non-personally identifiable information about your use of a given website or newsletter, e.g., whether you opened the e-mail. Like cookies, web beacons allow the us to summarize overall usage patterns for our analysis and provide personalized services to you. We do not share or provide personally identifiable information we may collect through such web beacons, such as names or e-mail addresses, without your express permission.
</p>
<p>
We strive to protect the transmission and storage of any information submitted by visitors to the Website. But no transmission and storage of data is completely secure, and submissions are at your sole risk.
</p>
</div>

`;
};
