from data.js
var tableData = data;

// YOUR CODE HERE!
// it's an array of objects(data)
//look at the exerciss we didn't do in class
//look at saturday's how to build a table lesson
//render the webpage with splinter, and then use beautiful soup to grab the elements you need.  An example of this can be found in week 12, day 2, activity 8.//

// Get a reference to the table body
var tbody = d3.select("tbody");


// Create a loop to build the table and populate it w/ stuff from data.js
data.forEach(function(tableData) {
var row = tbody.append("tr");
Object.entries(sighting).forEach(function([key, value]) {
var cell = row.append("td");
cell.text(value);
});
});


// event handling code may look like this:

// Select the submit button
var submit = d3.select("#submit");

submit.on("click", function() {

  // Prevent the page from refreshing IF YOU WANT TO
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#example-form-input");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  // Set the span tag in the h1 element to the text
  // that was entered in the form
  d3.select("h1>span").text(inputValue);
});

// somewhere around here would be where i'd use beautiful soup
// and splinter but I've run out of time and I'm also a little shy on at least one
// concept which is if I built a table with the data and i have a (let's pretend)
// a functioning event handler, what is it that BS and Splinter are actually doing?