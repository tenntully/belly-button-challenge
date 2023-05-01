/*
    goal is to make a clustered column chart

*/

//declare the arrays to hold each set of data
let greekNames = [];
let romanNames = [];
let pairs = [];
let greekSearchResults = [];
let romanSearchResults = [];

// for loop to populate the arrays
// data.js and all of its information 
for(var i = 0; i < searchResults.length; i++)
{
    // access each entry of data
    result = searchResults[i];

    //with each engty push information
    pairs.push(result.pair);
    greekNames.push(result.greekNames);
    romanNames.push(result.romanNames);
    greekSearchResults.push(result.greekSearchResults);
    romanSearchResults.push(result.romanSearchResults);
}

// plot data, first need trace
let greekTrace = {
    x: pairs,
    y: greekSearchResults,
    text: greekNames,
    name: "Greek",
    type: "bar"
};

let romanTrace = {
    x: pairs,
    y: romanSearchResults,
    text: romanNames,
    name: "Roman",
    type: "bar"
};

// create the array for out traces to be plotted together
let data = [greekTrace, romanTrace];

// add the layout properties
let layout = {
    title: "Greek vs Roman Search REsults",
    barmode: "group"
};

// render the plot to the tag with id = 'plot'
Plotly.newPlot("plot", data, layout);

