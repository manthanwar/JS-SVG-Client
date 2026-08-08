# Dolphin Examples

## How to add new HTML Form?

### Example Health

#### Step 1: Add Health Link Entry to Nav Menu

* JS-SVG-Client/doc/Examples/demo-data-template.js

```js
 {
  link: 'Health',
  menu: [
   {
    link: 'Disease Tracking',
    page: 'Geographical Information System',
    href: 'https://nodejs-covid19.onrender.com/',
    //  href: 'https://bapfoundation.org/',
    target: '_blank'
   },
   {
    link: 'Intelligent Healthcare',
    page: 'Intelligent Healthcare - AI Ready HL7 FHIR',
    href: 'demo-health.html'
   }
  ]
 }
```

* Access file <http://localhost:3000/demo-health.html>

#### Step 2: Add demo-health.html

* JS-SVG-Client/doc/Examples/demo-health.html

```html
<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="./icon.svg" sizes="any" type="image/svg+xml" />
  <link rel="stylesheet" type="text/css" media="screen" href="demo-main.css" />
  <link rel="stylesheet" type="text/css" media="screen" href="demo-pub-branding.css" />
  <script type="module" src="demo-health.js"></script>
 </head>
 <body></body>
</html>
```

#### Step 3: Add demo-health.js

JS-SVG-Client/doc/Examples/demo-health.js

```js
import * as mySvg from './svg.min.js';
import dataTemplate from './demo-data-template.js';
import { Utils } from './Utils.js';

window.onload = (event) => {
 const title = 'Intelligent Healthcare';
 dataTemplate.renderBody('demo-health.html');
 document.title = title;
 document.getElementById('page').innerHTML = title;

 const main = document.getElementsByTagName('main')[0];
 const article = document.createElement('article');
 main.appendChild(article);

 article.innerHTML = `
<h3>Disease Monitoring</h3>
<ul>
${Utils.createListItem('https://covid19.desiign.in/', 'Coronavirus Disease 2019 (COVID-19)')}
</ul>

<h3>Healthcare Documentation Automation - AI Ready HL7 FHIR</h3>
<ul>
${Utils.createListItemNoUrl('Medical Prescription')}
<ul>
${Utils.createListItem(' prescription.pdf', 'Samole Medical Prescription')}
${Utils.createListItem(' prescription.json', 'Sample MedicalRequest JSON Data')}
${Utils.createListItem(' demo-health-prescription.html', 'Create Medical Prescription')}
</ul>
</ul>
`;
};
```




### Example Medical Prescription

#### Step 1: Add demo-health-prescription.html

* JS-SVG-Client/doc/Examples/demo-health-prescription.html

```html
<!doctype html>
<html>
 <head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="./icon.svg" sizes="any" type="image/svg+xml" />
  <link rel="stylesheet" type="text/css" media="screen" href="demo-main.css" />
  <link rel="stylesheet" type="text/css" media="screen" href="demo-pub-certificate-personal.css"/>
  <script type="module" src="demo-health-prescription.js"></script>
 </head>
 <body></body>
</html>
```

#### Step 2: Add demo-health-prescription.js

JS-SVG-Client/doc/Examples/demo-health-prescription.js

```js
import * as mySvg from './svg.min.js';
import dataTemplate from './demo-data-template.js';
import { Utils } from './Utils.js';

// #region window.onload
window.onload = (event) => {
  const title = 'Intelligent Medical Prescription';
  dataTemplate.renderBody('demo-health-prescription.html');
  document.title = title;
  document.getElementById('page').innerHTML = title;

 const nav = document.getElementsByTagName('nav')[0];
 const aaa = nav.getElementsByTagName('a');
 nav.removeChild(aaa[aaa.length - 1]);

 const main = document.getElementsByTagName('main')[0];
 const article = document.createElement('article');
 main.appendChild(article);

 const url = 'demo-health-prescription-form.html';
 Utils.fetchUrlNoToggle(url, article);
};
// #endregion window.onload
```

#### Step 4: Add demo-health-prescription-form.html

* JS-SVG-Client/doc/Examples/demo-health-prescription-form.html

```html
<!-- #region Tabs -->
<div class="tab">
 <button class="tablinks">Upload JSON</button>
 <button class="tablinks">Fill Form</button>
 <!-- <button class="tablinks">Upload File</button> -->
</div>
<!-- #endregion Tabs -->

<!-- #region First Tab -->
<div id="London" class="tabcontent">
 <div class="formContainer">
  <h2>Create Your Prescription Using <a href="prescription.json" target="_blank">JSON File</a></h2>

  <form
   action="prescription/printFile"
   method="POST"
   enctype="multipart/form-data"
  >
   <div class="floating-label-group-group" style="margin-top: 20px">
    <div class="floating-label-group">
     <input
      type="text"
      id="nameF"
      name="nameF"
      size="12"
      required
      placeholder="Name"
     />
     <input type="email" id="email" name="email" placeholder="email" required />
    </div>
   </div>
   <div class="floating-label-group-group" style="margin-top: 40px">
    <div class="floating-label-group">
     <label for="file" style="margin-top: -20px; margin-right: -20px"
      >Select JSON File:</label
     >
     <input type="file" id="file" name="file"
     required accept=".json" />
    </div>
   </div>

   <div class="floating-label-group-group" style="margin-top: 40px">
    <input type="submit" value="Submit" />
    <input type="reset" value="Clear" />
   </div>
  </form>
 </div>
</div>
<!-- #endregion First Tab -->

<!-- #region Second Tab -->
<div id="Mumbai" class="tabcontent">
 <div class="formContainer">
  <h2>Create Your Prescription</h2>
  <div>Coming soon...</div>
 </div>
</div>
<!-- #endregion Second Tab -->

<!-- #region Third Tab -->
<div id="Pune" class="tabcontent">
 <div class="formContainer">
  <h2>Create Your Certificate Using JSON</h2>

  <form
   action="certificate/printJson"
   method="POST"
   enctype="multipart/form-data"
  >
   <div class="floating-label-group-group">
    <div class="floating-label-group">
     <label for="file">Select File </label>
     <input type="file" id="file" name="file" required />
    </div>
   </div>

   <div class="floating-label-group-group">
    <input type="submit" value="Submit" />
    <input type="reset" value="Clear" />
   </div>
  </form>
 </div>
</div>
<!-- #endregion Third Tab -->
```

#### Step 5: Add Route File prescription.cjs

* JS-SVG-Client/doc/Examples/routes/prescription.cjs

#### Step 5: Add Route Entry to Express App

* JS-SVG-Client/doc/Examples/demo-express.cjs

```cjs
const prescription = require('./routes/prescription.cjs');
app.use('/prescription', prescription);
```

#### Step 7. Access it via

* <https://desiign.in/demo-pub-doc-prescription.html>

#### Step . Keep Source, Backup Data and Cleanup Generated Files

##### Keep Source Files

Record list of files that must not be deleted

* D:/GitHub/JS-SVG-Client/scripts/keepFiles.txt

##### Backup Generated Data

/e/Junk/Dolphin-Data/

##### Cleanup

Run Cleanup Script `npm run clean`

* JS-SVG-Client/scripts/cleanup.sh
* JS-SVG-Client/scripts/cleanup.py




/d/GitHub/JS-SVG-Client/doc/views/prescription.hbs

/d/GitHub/JS-SVG-Client/doc/Examples/demo-health-prescription-view.js
