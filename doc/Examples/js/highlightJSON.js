function highlightJSON(json) {
 if (!json) return '';

 // Convert object to pretty-printed JSON string if it isn't already
 if (typeof json !== 'string') {
  json = JSON.stringify(json, null, 4);
 }

 // Escape HTML characters to prevent XSS injection
 json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

 // Regex to match keys, strings, numbers, booleans, and nulls
 const regex =
  /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g;

 return json.replace(regex, function (match) {
  let className = 'json-number';

  if (/^"/.test(match)) {
   if (/:$/.test(match)) {
    className = 'json-key';
   } else {
    className = 'json-string';
   }
  } else if (/true|false/.test(match)) {
   className = 'json-boolean';
  } else if (/null/.test(match)) {
   className = 'json-null';
  }

  return `<span class="${className}">${match}</span>`;
 });
}
