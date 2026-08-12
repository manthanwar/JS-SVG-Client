function syntaxHighlightJson(jsonObj) {
 // 1. Pretty print with 4 spaces indentation
 let str = JSON.stringify(jsonObj, null, 4);

 // 2. Escape HTML characters to prevent XSS
 str = str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

 // 3. Regex pattern targeting keys, strings, booleans, nulls, and numbers
 return str.replace(
  /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
  function (match) {
   let cls = 'json-number';
   if (/^"/.test(match)) {
    if (/:$/.test(match)) {
     cls = 'json-key'; // It's a key
    } else {
     cls = 'json-string'; // It's a string value
    }
   } else if (/true|false/.test(match)) {
    cls = 'json-boolean';
   } else if (/null/.test(match)) {
    cls = 'json-null';
   }
   return '<span class="' + cls + '">' + match + '</span>';
  }
 );
}

// Execution
// const data = {
//  id: 101,
//  user: 'John Doe',
//  verified: false,
//  tags: ['admin', 'staff']
// };
// document.getElementById('vanilla-json').innerHTML = syntaxHighlightJson(data);
