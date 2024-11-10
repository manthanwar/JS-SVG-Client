import data from './test-module.js';

console.log(data);

window.onload = (event) => {
 document.title = 'SVG';

 document.body.innerHTML = data.text;
};
