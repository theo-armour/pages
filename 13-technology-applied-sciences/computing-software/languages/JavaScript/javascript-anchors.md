# JavaScript Anchors

## 1

// Select all anchor elements on the page
const links = document.querySelectorAll('a');

// Map the href attribute of each link into an array
const linkArray = Array.from(links).map(link => link.href);

// Log the array to the console
console.log(linkArray);

## #2

console.table(Array.from(links).map(link => ({ Text: link.innerText, URL: link.href })));
// Select all anchor elements on the page
const links = document.querySelectorAll('a');

// Display the links in a console table
console.table(Array.from(links).map(link => ({ Text: link.innerText, URL: link.href })));
