const data = {};

data.cloudHost = 'https://js-svg-client.onrender.com/';

data.home = {
 logo: 'image',
 text: 'Dolphin',
 href: 'http://127.0.0.1:5500/doc/Examples/demo-artfan.html'
};

// link = on nav page
// page = page header
data.navMenu = [
 {
  link: 'Home',
  page: 'Home of Design Intelligence',
  href: 'demo-home.html'
 },
 {
  link: 'Art',
  menu: [
   {
    link: 'Art Design',
    page: 'Art Design',
    href: 'demo-art-design.html'
   },
   {
    link: 'Industrial Design',
    page: 'Industrial Design - Fan',
    href: 'demo-art-fan.html'
   },
   {
    link: 'Logo Design',
    page: 'Logo Design',
    href: 'demo-art-logo.html'
   }
  ]
 },
 {
  link: 'Charts',
  menu: [
   {
    link: 'Dashboard',
    page: 'Visualization Dashboards',
    href: 'demo-dashboard.html'
   },
   {
    link: 'Pie Chart',
    page: 'Pie Chart',
    href: 'demo-plot-pie.html'
   },
   {
    link: 'Bar Chart',
    page: 'Bar Chart',
    href: 'demo-plot-bar-axisY.html'
   },
   {
    link: 'Scatter Plot',
    page: 'Scatter Plot',
    href: 'demo-plot-scatter.html'
   },
   {
    link: 'Bubble Chart',
    page: 'Bubble Chart',
    href: 'demo-plot-bubble.html'
   },
   {
    link: 'Line Chart',
    page: 'Line Chart',
    href: 'demo-plot-lines.html'
   },
   //  {
   //   link: 'Stair Plot',
   //   page: 'Stair Plot',
   //   href: 'demo-plot-steps.html'
   //  },
   //  {
   //   link: 'Area Chart',
   //   page: 'Area Chart',
   //   href: 'demo-plot-areas.html'
   //  },
   {
    link: 'Time-Series',
    page: 'Time-Series Plot',
    href: 'demo-plot-timeSeries.html'
   }
  ]
 },
 {
  link: 'Gauges',
  menu: [
   {
    link: 'Radial Progress',
    page: 'Radial Progress',
    href: 'demo-gauge-radial-progress.html'
   },
   {
    link: 'Radial Half',
    page: 'Radial Gauge Half',
    href: 'demo-gauge-radial-half.html'
   },
   {
    link: 'Radial 3 Quarter',
    page: 'Radial Gauge 3 Quarter',
    href: 'demo-gauge-radial-3quarter.html'
   },
   {
    link: 'Radial Full',
    page: 'Radial Gauge',
    href: 'demo-gauge-radial.html'
   }
   //  {
   //   link: 'Linear Gauge',
   //   page: 'Linear Gauge',
   //   href: 'demo-gauge-linear.html'
   //  },
   //  {
   //   link: 'Thermometer Gauge',
   //   page: 'Thermometer Gauge',
   //   href: 'demo-gauge-thermometer.html'
   //  }
  ]
 },
 {
  link: 'Manufacturing',
  menu: [
   {
    link: 'Process Industry',
    page: 'Process Operations Dashboard',
    href: 'demo-operations.html'
   },
   {
    link: 'Water Resources',
    page: 'River Management Dashboard',
    href: 'demo-operations.html'
   }
  ]
 },
 {
  link: 'Public Healthcare',
  page: 'Geographical Information System',
  href: 'https://nodejs-covid19.onrender.com/',
  //  href: 'https://bapfoundation.org/',
  target: '_blank'
 },
 {
  // page: 'Data-Driven Reporting and Publication Automation',
  // href: 'demo-pub-branding.html'
  link: 'Publications',
  menu: [
   {
    link: 'Brand Identity',
    page: 'Design Intelligence and Document Automation',
    href: 'demo-pub-branding.html'
   },
   {
    link: 'Certificates and Awards',
    page: 'Certificates and Awards',
    href: 'demo-pub-certificate.html'
   },
   {
    link: 'Document Automation',
    page: 'Document Automation',
    href: 'demo-pub-doc-automation.html'
   }
   //  {
   //   link: 'E-Commerce',
   //   page: 'E-Commerce Applications',
   //   href: 'demo-reporting.html'
   //  },
   //  {
   //   link: 'Data-Driven Reporting',
   //   page: 'Data-Driven Reporting and Publication Automation',
   // href: 'demo-reporting.html'
   //  },
  ]
 },
 {
  link: 'Products',
  page: 'Products',
  href: 'demo-products.html'
 },
 {
  link: 'Education',
  page: 'Education and Training',
  href: 'demo-education.html'
 }
];

data.getKeyByValue = (object, value) => {
 return Object.keys(object).find((key) => object[key] === value);
};

data.getIndexArrayObject = (arrayOfObjects, key, value) => {
 return (index = arrayOfObjects.findIndex((p) => p[key] == value));
};

data.getPageIndex = (value) => {
 return (index = data.navMenu.findIndex((p) => p.href == value));
};

data.getPageObj = (value) => {
 const obj = data.navMenu.find((o) => o.href === value);
 return obj.page;
};

data.findPage = (navMenu, value) => {
 for (const val of navMenu) {
  if (val.href === value) return val.page;
  else if (val.menu) {
   var result = data.findPage(val.menu, value);
   if (result) return result;
  }
 }
};

data.createHeader = () => {
 const header = document.getElementsByTagName('header')[0];
 const home = document.createElement('div');
 const homeSpan = document.createElement('span');

 //  console.log(data.header.home.logo);

 header.innerHTML = data.headerText;

 return header;
};

function fetchHtml(url, callback) {
 fetch(url)
  .then(status)
  .then((response) => response.text())
  .then((data) => {
   const parser = new DOMParser();
   const doc = parser.parseFromString(data, 'text/html');
   callback(doc);
  })
  .catch((error) => {
   console.error('Failed to fetch page: ', error);
   throw error;
  });
}

function fetchText(url, callback) {
 fetch(url)
  .then(data.fetchStatus)
  .then((response) => response.text())
  .then((data) => {
   callback(data);
  })
  .catch((error) => {
   throw error;
  });
}

data.header = 'demo-header.html';
data.footer = 'demo-footer.html';

data.fetchStatus = (response) => {
 if (!response.ok) {
  throw new Error('HTTP status ' + response.status);
 }
 return response;
};

data.makeNav = () => {
 const nav = document.getElementsByTagName('nav')[0];
 const xxx = document.getElementsByClassName('navBarLines')[0];
 xxx.onclick = () => {
  xxx.classList.toggle('navBarLineChange');
  data.navBarOnClick(xxx);
  nav.classList.toggle('navChange');
 };

 for (const item of data.navMenu) {
  const aaa = document.createElement('a');
  if (item.href) aaa.href = item.href;
  if (item.target) aaa.target = item.target;
  aaa.innerHTML = item.link;
  nav.appendChild(aaa);

  const div = document.createElement('div');
  nav.appendChild(div);

  if (item.menu) {
   for (const itemA of item.menu) {
    const aaa = document.createElement('a');
    aaa.href = itemA.href;
    if (itemA.target) aaa.target = itemA.target;
    aaa.innerHTML = itemA.link;
    aaa.classList.add('navSubMenu');
    div.appendChild(aaa);
   }
   aaa.innerHTML = item.link + ' +';
   //  aaa.style.height = '40px';
   //  aaa.style.lineHeight = '40px';
   aaa.style.padding = '0px 0 10px 10px';
   aaa.onclick = () => {
    const str = item.link + ' +';
    if (aaa.innerHTML === str) {
     aaa.innerHTML = item.link + ' -';
    } else {
     aaa.innerHTML = str;
    }
    div.classList.toggle('navSubMenuToggle');
   };
  }
 }
};

data.renderBody = (htmlPage) => {
 //    <link rel="icon" href="#" sizes="any" type="image/svg+xml" />
 //  var link = document.querySelector("link[rel~='icon']");
 //  var link = document.querySelector("link[rel='shortcut icon']");
 var link = document.querySelector("link[rel*='icon']");
 if (!link) {
  link = document.createElement('link');
  link.rel = 'shortcut icon';
  document.head.appendChild(link);
 }
 link.type = 'image/svg+xml';
 link.href = './icon.svg';

 document.body.innerHTML = data.bodyInnerHtml.replaceAll('\n', '');

 const logo = document.getElementById('logo');
 logo.innerHTML = `<div><a href="demo-home.html"><svg class="logoSvg" width="50" height="50"> <g transform="scale(8) translate(-2.4,-0.2) rotate(154, 5, 3)"><path d="M1.2, 3.0 C0.5, 5, 4.0, 4.6, 4.0, 4.6, 4.0, 4.6, 4.8, 5.4, 6.0, 5.0, 6.0, 5.0, 5.0, 5.0, 5.4, 4.2, 5.4, 4.2, 7.5, 3.3, 7.8, 2.0, 7.8, 2.0, 9.0, 1.6, 8.8, 1.0, 8.0, 1.6, 7.2, 0.4, 7.2, 0.4, 6.8, 0.6, 7.4, 1.8, 7.4, 1.8, 7.4, 1.8, 5.7, 3.2, 3.6, 3.2, 4.8, 1.3, 3.0, 2.2, 2.6, 3.1, 2.6, 3.1, 1.8, 3.0, 1.4, 2.5, 1.0, 2.4, 1.0, 2.6, 1.2, 3.0" /></g></svg></a></div>
`;

 // <circle cx="1.7" cy="3.4" r="0.16" fill="white"/>
 // matrix(8 0 0 -8 -7 42)
 //  rotate(180, 5, 3)

 data.makeNav();

 const subPage = data.findPage(data.navMenu, htmlPage);
 document.title = subPage;
 if (subPage) document.getElementById('page').innerHTML = subPage;

 //  const footer = document.getElementsByTagName('footer')[0];
 //  footer.style.position = 'relative';
 //  if (footer.getBoundingClientRect().top < 600) footer.style.top = 240 + 'px';
};

data.renderTemplate = () => {
 document.body.innerHTML = '<header></header><main></main><footer></footer>';
 const header = document.getElementsByTagName('header')[0];
 header.innerHTML = data.headerInnerHtml;
 header.id = 'header';
 const footer = document.getElementsByTagName('footer')[0];
 footer.innerHTML = data.footerInnerHtml;
 footer.id = 'footer';

 const main = document.getElementsByTagName('main')[0];
 main.innerHTML = `
   <article>
    <h2>Google Chrome</h2>
    <p>Google Chrome is a web browser.</p>
   </article>`;

 //  fetchText(data.header, (data) => {
 //   const header = document.getElementsByTagName('header')[0];
 //   header.innerHTML = data;
 //   //   header.id = 'header';
 //   //   console.log(data.getElementsByTagName('main')[0].innerHTML);
 //   //   console.log(document.getElementById('header').innerHTML);
 //  });

 // fetchHtml(data.header, (data) => {
 //  const header = document.getElementsByTagName('header')[0];
 //  header.id = 'header';
 //  // header.innerHTML = data;
 // //   header.appendChild(data.getRootNode());
 //   header.appendChild(data.getElementsByTagName('header')[0]);
 //  // header.innerHTML = data;
 //  // console.log(data.getElementsByTagName('main')[0].innerHTML);
 // });

 //   fetchText(data.footer, (data) => {
 //    const footer = document.getElementsByTagName('footer')[0];
 //    footer.innerHTML = data;
 //   });
};

const no = 0;
data.navBarOnClick = (x) => {
 // var child = x.firstElementChild;
 //  child.classList.toggle('navBarLineColor');

 const children = x.childNodes;
 for (const child of children) {
  child.classList.toggle('navBarLineColor');
 }
};

//<div><button>Dropdown <i>AAA</i></button>

const junkA = `
<a class='navLink' href='https://bapfoundation.org/' target='_blank'>Mao</a>
<a class="navDropdown">Dropdown</a>
<button>Dropdown <i>AAA</i></button>
<div class="navDropdownMenu">
<a href="demo-artDesign.html">Art</a>
<a href="demo-dashboard.html">Viz</a>
<a href="demo-operation.html">Mfg</a>
</div>
`;

// <div>Company Links</div>
// <div>Social Media</div>
data.bodyInnerHtml = `
<header>
<brand><div id="logo"></div><div><a href="demo-home.html">Dolphin</a> <span id="page"></span></div></brand>
<div class="navBarLines">
<div class="navBarLine1"></div>
<div class="navBarLine2"></div>
<div class="navBarLine3"></div>
</div>
</header>
<nav></nav>
<main id="main"></main>
<footer>
<br>
<div>Dolphin is a data-driven vector visualization studio. It is available as a lightweight stand-alone client-side application as well as the most efficient server-side data visualization engine. Thank you for choosing Dolphin for your data visualization needs.
</div>
<menu>
<a href="aboutUs.html">About Us</a>
<a href="contact.html">Contact Us</a>
<a href="privacy.html">Privacy Policy</a>
<a href="cookies.html">Cookie Policy</a>
<a href="service.html">Terms of Service</a>
<a href="careers.html">Careers</a>
</menu>
<!--
<menu>
<a href="linkedin.html">LinkedIn</a>
<a href="facebook.html">YouTube</a>
<a href="youtube.html">Facebook</a>
<a href="twitter.html">Twitter</a>
<a href="instagram.html">Instagram</a>
</menu>
-->
<copy>&copy; Copyright 2024 Dolphin. All Rights Reserved.</copy>
</footer>
`;

data.headerInnerHtml = `
   <main>Dolphin <span>Art Design</span></main>
   <nav>
    <a href="demo-artDesign.html">Art</a>
    <a href="demo-dashboard.html">Viz</a>
    <a href="demo-operation.html">Mfg</a>
    <a href="demo-reporting.html">Pub</a>
    <a href="https://bapfoundation.org/" target="_blank">Map</a>
    <menu>
     <button>Dropdown <i class="fa fa-caret-down"></i></button>
     <nav>
      <a href="demo-artDesign.html">Art</a>
      <a href="demo-dashboard.html">Viz</a>
      <a href="demo-operation.html">Mfg</a>
     </nav>
    </menu>
   </nav>
`;

data.footerInnerHtml = `
<div>
 <div>Company</div>
 <menu>
  <a href="aboutUs.html">About</a>
  <a href="contact.html">Contact</a>
  <a href="privacy.html">Privacy Policy</a>
  <a href="cookies.html">Cookie Policy</a>
  <a href="service.html">Terms of Service</a>
  <a href="careers.html">Careers</a>
 </menu>
</div>
<div>
 <div>Social</div>
 <menu>
  <a href="linkedin.html">LinkedIn</a>
  <a href="facebook.html">YouTube</a>
  <a href="youtube.html">Facebook</a>
  <a href="twitter.html">Twitter</a>
  <a href="instagram.html">Instagram</a>
 </menu>
</div>
<div>&copy; Copyright 2024 by Manthanwar. All Rights Reserved.</div>
`;

data.plotContainerInnerHTML = `
 <div id="plot-Container">
 <div><main><h1>Pie Basic</h1><article id="pie-basic"></article></main></div>
 <div><main><h1>Pie Basic2</h1><article id="pie-basic2"></article></main></div>

 <div><main><h1>Bar axis y</h1><article id="bar-axisY"></article></main></div>

<div><main><h1>Plot Scatter </h1><article id="plt-scats"></article></main></div>
<div><main><h1>Plot Lines   </h1><article id="plt-lines"></article></main></div>

</div>
`;

data.plotContainerInnerHTMLAll = `
 <div id="plot-Container">
 <div><main><h1>Pie Basic</h1><article id="pie-basic"></article></main></div>
 <div><main><h1>Pie Wedge</h1><article id="pie-wedge"></article></main></div>
 <div><main><h1>Pie Donut</h1><article id="pie-donut"></article></main></div>
 <div><main><h1>Pie 2 Pie</h1><article id="pie-2-pie"></article></main></div>
 <div><main><h1>Pie 2 Bar</h1><article id="pie-2-bar"></article></main></div>

 <div><main><h1>Bar axis x</h1><article id="bar-axisX"></article></main></div>
 <div><main><h1>Bar axis y</h1><article id="bar-axisY"></article></main></div>
 <div><main><h1>Bar club x</h1><article id="bar-clubX"></article></main></div>
 <div><main><h1>Bar club y</h1><article id="bar-clubY"></article></main></div>
 <div><main><h1>Bar heap x</h1><article id="bar-heapX"></article></main></div>
 <div><main><h1>Bar heap y</h1><article id="bar-heapY"></article></main></div>
 <div><main><h1>Bar cent x</h1><article id="bar-centX"></article></main></div>
 <div><main><h1>Bar cent y</h1><article id="bar-centY"></article></main></div>

<div><main><h1>Plot Scatter </h1><article id="plt-scats"></article></main></div>
<div><main><h1>Plot Lines   </h1><article id="plt-lines"></article></main></div>
<div><main><h1>Plot Steps   </h1><article id="plt-steps"></article></main></div>
<div><main><h1>Plot Areas   </h1><article id="plt-areas"></article></main></div>
<div><main><h1>Time Series  </h1><article id="plt-times"></article></main></div>
<div><main><h1>Bubble Chart </h1><article id="plt-blobs"></article></main></div>
<div><main><h1>Spline Chart </h1><article id="plt-curve"></article></main></div>
<div><main><h1>Error Chart  </h1><article id="plt-error"></article></main></div>
<div><main><h1>Box & Whisker</h1><article id="plt-whisk"></article></main></div>

<div><main><h1>Polar Lines  </h1><article id="pol-lines"></article></main></div>
<div><main><h1>Polar Scatter</h1><article id="pol-scats"></article></main></div>
<div><main><h1>Polar Bar-R  </h1><article id="pol-barsR"></article></main></div>
<div><main><h1>Radar Chart  </h1><article id="pol-radar"></article></main></div>

<div><main><h1>Gauge Round  </h1><article id="gag-round"></article></main></div>
<div><main><h1>Gauge Bar-x  </h1><article id="gag-barsX"></article></main></div>
<div><main><h1>Gauge Bar-y  </h1><article id="gag-barsY"></article></main></div>

<div><main><h1>Gauge Progress </h1><article id="gag-progress"></article></main></div>
<div><main><h1>Gauge Half   </h1><article id="gag-half"></article></main></div>
<div><main><h1>Gauge ThreeQ </h1><article id="gag-threeQ"></article></main></div>
<div><main><h1>Gauge Round  </h1><article id="gag-round"></article></main></div>

</div>
`;

export default data;
