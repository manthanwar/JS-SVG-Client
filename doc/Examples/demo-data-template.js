const data = {};

data.home = {
 logo: 'image',
 text: 'Dolphin',
 href: 'http://127.0.0.1:5500/doc/Examples/demo-artfan.html'
};

data.navMenu = [
 {
  link: 'Home',
  href: 'demo-home.html'
  // page: 'aaaa-homm'
 },
 {
  link: 'Art',
  page: 'Art Design',
  menu: [
   {
    link: 'Art-Dolphin',
    page: 'Dolphin Design',
    href: 'demo-artDesign.html'
   },
   {
    link: 'Industrial Fan',
    page: 'Fan Design',
    href: 'demo-fan.html'
   }
  ]
 },
 {
  link: 'Viz',
  page: 'Visualization Dashboard',
  href: 'demo-dashboard.html'
 },
 {
  link: 'Mfg',
  page: 'Operations Dashboard',
  href: 'demo-operations.html'
 },
 {
  link: 'Pub',
  page: 'Data-Driven Reporting and Publication Automation',
  href: 'demo-reporting.html'
 },
 {
  link: 'Map',
  page: 'Geographical Information System',
  href: 'https://bapfoundation.org/',
  target: '_blank'
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

 console.log(data.header.home.logo);

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
 link.href = 'icon.svg';

 document.body.innerHTML = data.bodyInnerHtml.replaceAll('\n', '');

 const logo = document.getElementById('logo');
 logo.innerHTML = `<a href="demo-home.html"><svg class="aaa"> <g transform="scale(8) translate(-2.4,-0.2) rotate(154, 5, 3)"><path d="M1.2, 3.0 C0.5, 5, 4.0, 4.6, 4.0, 4.6, 4.0, 4.6, 4.8, 5.4, 6.0, 5.0, 6.0, 5.0, 5.0, 5.0, 5.4, 4.2, 5.4, 4.2, 7.5, 3.3, 7.8, 2.0, 7.8, 2.0, 9.0, 1.6, 8.8, 1.0, 8.0, 1.6, 7.2, 0.4, 7.2, 0.4, 6.8, 0.6, 7.4, 1.8, 7.4, 1.8, 7.4, 1.8, 5.7, 3.2, 3.6, 3.2, 4.8, 1.3, 3.0, 2.2, 2.6, 3.1, 2.6, 3.1, 1.8, 3.0, 1.4, 2.5, 1.0, 2.4, 1.0, 2.6, 1.2, 3.0" /></g></svg></a>
`;
 // <circle cx="1.7" cy="3.4" r="0.16" fill="white"/>
 // matrix(8 0 0 -8 -7 42)
 //  rotate(180, 5, 3)

 data.makeNav();

 const subPage = data.findPage(data.navMenu, htmlPage);
 if (subPage) document.getElementById('page').innerHTML = subPage;
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

data.bodyInnerHtml = `
<header>
<brand><div id="logo"></div><div>Dolphin <span id="page"></span></div></brand>
<div class="navBarLines">
<div class="navBarLine1"></div>
<div class="navBarLine2"></div>
<div class="navBarLine3"></div>
</div>
</header>
<nav></nav>
<main></main>
<footer>
<div>Company</div>
<menu>
<a href="aboutUs.html">About</a>
<a href="contact.html">Contact</a>
<a href="privacy.html">Privacy Policy</a>
<a href="cookies.html">Cookie Policy</a>
<a href="service.html">Terms of Service</a>
<a href="careers.html">Careers</a>
</menu>
<div>Social</div>
<menu>
<a href="linkedin.html">LinkedIn</a>
<a href="facebook.html">YouTube</a>
<a href="youtube.html">Facebook</a>
<a href="twitter.html">Twitter</a>
<a href="instagram.html">Instagram</a>
</menu>
<copy>&copy; Copyright 2024 by Manthanwar. All Rights Reserved.</copy>
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

export default data;