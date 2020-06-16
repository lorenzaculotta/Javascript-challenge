// from data.js
var tableData = data;

// YOUR CODE HERE!
// -----------------------------
// 1) Grab references
 var inputField = d3.select("#datetime")
 var outputField= d3.select("#outputTable")
// console.log(inputField)

// Generate table with all data
data.forEach(function(x, i) {
    // add a new row to the table
    var row = outputField.append("tr");
    // populate table with info
    row.append("td").text(x.datetime);
    row.append("td").text(x.city);
    row.append("td").text(x.state);
    row.append("td").text(x.country);
    row.append("td").text(x.shape);
    row.append("td").text(x.durationMinutes);
    row.append("td").text(x.comments);
    // console.log to control
    // console.log(`Index ${i} has been uploaded`)
});
    // console.log to control end of upload
    console.log(`---- ENTIRE DATASET UPLOADED ----`)

// ---------------------------------------------------
// 2) Define a function to handle the input
function filterData() {
        // grab input value
        // var inputField = d3.select("#datetime")
        var inputValue= d3.event.target.value;
        // filter data
        filteredData= data.filter(x => x.datetime === inputValue)

        // clear table before rendering
        d3.selectAll("#outputTable > tr").remove()

        // populate output table with filtered data
        filteredData.forEach(function(x, i) {
            // add a new row to the table
            var row = outputField.append("tr");
            // populate table with info
            row.append("td").text(x.datetime);
            row.append("td").text(x.city);
            row.append("td").text(x.state);
            row.append("td").text(x.country);
            row.append("td").text(x.shape);
            row.append("td").text(x.durationMinutes);
            row.append("td").text(x.comments);
        });    
        // console.log to control end of update
        console.log(`Data filtered by date: ${inputValue}`)
}

// ---------------------------------------------------
// 3) Attach an event to detect changes to the input field
d3.select("#datetime").on("change",filterData)
