// with console
// The document object is essentially the interface that the browser gives us to access the DOM.

// document.children 
// html
// length: 1

// document.children[0]
// <html></html>

// (document.children[0]).children[1]
// <body></body>

// document.children[0].children[1].children[0]
// <h1></h1>

// let header = document.children[0].children[1].children[0]
// now can use header variable to change HTML, CSS, and all sorts of properties for how the browser should display this header.
// header.style.color = "red"

// document.getElementsByTagName("p");
// 0: p
// length: 1

// document.getElementsByTagName("p")[0].innerText = "Yes it is!"
